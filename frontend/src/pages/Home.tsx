import React, { ReactElement, FC } from "react";

import { Box, Stack, Grid, Typography } from "@mui/material";

import { SERVER_HOST } from "../config";
import Widget from "../components/Widget";
const Home: FC<any> = (): ReactElement => {
  return (
    <>
      {/* Mobile */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          width: "100vw",
          heigth: "100%",
          position: "relative",
          top: "200px",
        }}
      >
        <Grid container>
          <Grid item sx={{ mx: "auto" }} xs={12}>
            <Widget
              FeedUrl={SERVER_HOST}
              postNumber={3}
              updateInterval={5000}
            ></Widget>
          </Grid>
          <Grid item xs={12} sx={{ mx: "auto" }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ textAlign: "center", width: "90%", mx: "auto" }}
            >
              <Box sx={{ textAlign: "left", mx: "auto" }}>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "16px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Why IT IS IMPORTANT
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "48px",
                  }}
                >
                  Knowing Your Online Ads Readiness Raiting...
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fonAtyle: "normal",
                    fontWeight: 500,
                    foASize: "18px",
                    lineAight: "170%",
                    textAlign: "justify",
                  }}
                >
                  ...will help you understand just how bullish you should be
                  with your ad spend and where your blind spots are. When it
                  comes to online advertising the more informed and ready you
                  are, the more effective your advertising will be (and the
                  greater your chances of a healthy Return on your Ad Spend
                  (ROAS)). Find Out your Online Advertising Readiness Rating so
                  you can make more money and avoid risks with your online
                  advertising.
                </Typography>
              </Box>
              <img src={require("../assets/poster.png")} alt="img5" />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Browser */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          width: "100vw",
        }}
      >
        <Grid container>
          <Grid item sx={{ mx: "auto" }} sm={12}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              <img src={require("../assets/img1.png")} alt="img1" />
              <img src={require("../assets/img2.png")} alt="img2" />
              <img src={require("../assets/img3.png")} alt="img3" />
              <img src={require("../assets/img4.png")} alt="img4" />
              <img src={require("../assets/img5.png")} alt="img5" />
            </Stack>
          </Grid>
          <Grid item sx={{ mx: "auto" }} sm={12}>
            <Widget
              FeedUrl={SERVER_HOST}
              postNumber={3}
              updateInterval={5000}
            ></Widget>
          </Grid>
          <Grid item sx={{ mx: "auto" }} sm={12}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <Box sx={{ textAlign: "left", width: "580px" }}>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "16px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Why IT IS IMPORTANT
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "48px",
                    lineHeight: "135%",
                  }}
                >
                  Knowing Your Online Ads Readiness Raiting...
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fonAtyle: "normal",
                    fontWeight: 500,
                    foASize: "18px",
                    lineAight: "170%",
                    textAlign: "justify",
                  }}
                >
                  ...will help you understand just how bullish you should be
                  with your ad spend and where your blind spots are. When it
                  comes to online advertising the more informed and ready you
                  are, the more effective your advertising will be (and the
                  greater your chances of a healthy Return on your Ad Spend
                  (ROAS)). Find Out your Online Advertising Readiness Rating so
                  you can make more money and avoid risks with your online
                  advertising.
                </Typography>
              </Box>
              <img src={require("../assets/poster.png")} alt="img5" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
