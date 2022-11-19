import React, { FC, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";
import Post from './Post';
interface WidgetProps {
  FeedUrl:string,
  postNumber:number,
  updateInterval:number
}

const Widget: FC<WidgetProps> = (props) => {
  return (
    <>
    <Box sx={{bgcolor: "#6424FF", width:"80%", mx:"auto", my:3,textAlign: "center",}}>
    widget
    </Box>
      
    </>
  );
};

export default Widget;