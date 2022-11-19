import React, { FC, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";
import { PostModel } from '../models/PostModel';

interface PostProps {
  post: PostModel
}

const Post: FC<PostProps> = (props) => {
  return (
    <>
     Post
    </>
  );
};

export default Post;