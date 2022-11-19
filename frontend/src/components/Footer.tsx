import React, { FC, ReactElement } from "react";
import { Box, Button, Grid, Typography, Stack } from "@mui/material";
export const Footer: FC = (): ReactElement => {
  return (
    <>
      {/* Mobile */}
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          mx: "auto",
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          top: "200px",
          position: "relative",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
              mx: "auto",
              bgcolor: "#6424FF",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                my: "auto",
                mx: "auto",
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "35px",
                lineHeight: "150%",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                top: "20px",
                position: "relative",
                width: "90%",
              }}
            >
              Find Out YOUR Online Advertising Readiness Rating!
            </Typography>

            <Button
              className={"zoom_out"}
              sx={{
                position: "relative",
                top: "50px",
                width: "90%",
                height: "90px",
                background: "#06F48A",
                color: "white",
                boxShadow:
                  "0px 1.46202px 21.9303px rgba(0, 0, 0, 0.1), 0px 2.92404px 7.31009px rgba(0, 0, 0, 0.1)",
                fontFamily: "SF Compact Display",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "38px",
                lineHeight: "45px",
              }}
            >
              START QUIZ
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              bgcolor: "#6424FF",
              textAlign: "center",
              mx: "auto",
              height: "100px",
              top: "30px",
              position: "relative",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <Box sx={{ mx: "auto",px:2, my: 3, alignItems: "center" }}>
                <img src={require("../assets/logo2.png")} alt="logo2" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "SF Compact Display",
                  fontStyle: "normal",
                  fontweight: 500,
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "white",
                  width:"90%",
                  mx:"auto"
                }}
              >
                ©2019 Tidal Traffic. All rights reserved.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {/* Browser */}
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          mx: "auto",
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          position: "relative",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
              mx: "auto",
              bgcolor: "#6424FF",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                my: "auto",
                mx: "auto",
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "35px",
                lineHeight: "150%",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                top: "20px",
                position: "relative",
              }}
            >
              Find Out YOUR Online Advertising Readiness Rating!
            </Typography>

            <Button
              className={"zoom_out"}
              sx={{
                position: "relative",
                top: "120px",
                width: "347px",
                height: "86px",
                background: "#06F48A",
                color: "white",
                boxShadow:
                  "0px 1.46202px 21.9303px rgba(0, 0, 0, 0.1), 0px 2.92404px 7.31009px rgba(0, 0, 0, 0.1)",
                fontFamily: "SF Compact Display",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "38px",
                lineHeight: "45px",
              }}
            >
              START QUIZ
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              textAlign: "center",
              mx: "auto",
              height: "100px",
              top: "80px",
              position: "relative",
            }}
          >
            ©2019 Tidal Traffic. All rights reserved.
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              textAlign: "center",
              mx: "auto",
              height: "100px",
              top: "80px",
              position: "relative",
            }}
          >
            ©2019 Tidal Traffic. All rights reserved.
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              textAlign: "center",
              mx: "auto",
              height: "100px",
              top: "80px",
              position: "relative",
            }}
          >
            About Us | Terms of Service | Privacy Policy
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
