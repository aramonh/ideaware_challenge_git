import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { PostModel } from "../models/PostModel";

interface PostProps {
  post: PostModel;
}

const Post: FC<PostProps> = (props) => {
  const { post } = props;
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          my: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            width: "90%",
            mx: "auto",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "150%",
              color: "#000000",
              textAlign: "left",
              mx: 3,
              my: 3,
            }}
          >
            {post.message}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "150%",
              color: "#6424FF",
              textAlign: "left",
              mx: 3,
              my: 3,
            }}
          >
            {post.author}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "90%",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "150%",
              color: "white",
              textAlign: "left",
            }}
          >
            Posted: {post.date}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Post;
