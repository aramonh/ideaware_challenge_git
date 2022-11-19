import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import Post from "./Post";
import axios from "axios";
import moment from "moment-timezone";
interface ServerData {
  text: string;
  created_at: string;
  user: {
    name: string;
  };
}

interface WidgetProps {
  FeedUrl: string;
  postNumber: number;
  updateInterval: number;
}

const Widget: FC<WidgetProps> = (props) => {
  const { FeedUrl, postNumber, updateInterval } = props;
  const [posts, setPosts] = React.useState<Array<ServerData>>([]);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  React.useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(FeedUrl + "?limit=" + postNumber)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((e) => {});
    }, updateInterval);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: "#6424FF",
          width: "90%",
          mx: "auto",
          my: 3,
          textAlign: "center",
        }}
      >
        <Grid container>
          {posts.map((item, indx) => (
            <Grid key={indx} item xs={12}>
              <Post
                post={{
                  author: item?.user?.name,
                  date: moment(new Date(item?.created_at))
                    .tz(timezone)
                    .format("DD/MM/yyyy hh:mm"),
                  message: item?.text,
                }}
              ></Post>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Widget;
