import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const NotFound: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">No se ha encontrado lo que buscas</Typography>
    </Box>
  );
};

export default NotFound;