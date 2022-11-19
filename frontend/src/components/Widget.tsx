import React, { FC, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";
import Post from './Post';
import axios from "axios";
interface WidgetProps {
  FeedUrl:string,
  postNumber:number,
  updateInterval:number
}

const Widget: FC<WidgetProps> = (props) => {
  const { FeedUrl , postNumber , updateInterval } = props;

  const [posts , setPosts ] = React.useState([])

  React.useEffect(() => {
    const interval = setInterval(() => {
      axios.get(FeedUrl).then((response) => {
        setPosts(response.data);
      }).catch((e) => {
      })
    }, updateInterval );
    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <Box sx={{bgcolor: "#6424FF", width:"80%", mx:"auto", my:3,textAlign: "center",}}>
    {
      posts.slice(0,postNumber).map((item, indx)=>(
        <p>post {indx}</p>
      ))
    }
    </Box>
      
    </>
  );
};

export default Widget;