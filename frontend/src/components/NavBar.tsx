import React, { FC, ReactElement } from "react";
import {
  Box,
  Grid,
  Button,
  Stack,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import "./../assets/effects.scss";
import background from "../assets/bghead.png";

const Navbar: FC = (): ReactElement => {
  return (
    <>
      {/* Mobile */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", sm: "none" }, height:"100%",
          width: "100%"
        }}
      >
        <Grid container>
          <Grid
            item
            sm={12}
            sx={{ bgcolor: "#6424FF", width: "100%", height: "180px" }}
          >
            <a
              style={{
                position: "absolute",
                top: "30px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              href="/"
            >
              <img src={require("../assets/logo1.png")} />
            </a>
            <Button
              sx={{
                position: "absolute",
                width: "169px",
                height: "44px",
                top: "100px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#FFFFFF",
                boxShadow:
                  "0px 1.46202px 21.9303px rgba(0, 0, 0, 0.1), 0px 2.92404px 7.31009px rgba(0, 0, 0, 0.1)",
                color: "#333333",
                fontFamily: "SF Compact Display",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "20px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              START QUIZ
            </Button>
          </Grid>
          <Grid
            item
            sm={12}
            sx={{
              width: "100%",
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                top: "10px",
                bgcolor: "#6424FF",
                width: "90%",
                height: "90%",
                left: "50%",
                transform: "translateX(-50%)",
                position: "relative",
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                sx={{
                  textAlign: "left",
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  color: "white",
                }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    p: 2,
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "16px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Attention Online Advertisers
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    p: 2,
                    fontWeight: 900,
                    fontSize: "45px",
                    lineHeight: "123.5%",
                  }}
                >
                  What’s Your Online Advertising Readiness Rating?
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    p: 2,
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "170%",
                  }}
                >
                  When you take this quiz, you’ll get a free report that
                  outlines YOUR Readiness Rating.
                </Typography>
                <Button
                  sx={{
                    p: 2,
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
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    p: 2,
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "170%",
                  }}
                >
                  Learn more about Readiness Raitings
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Browser */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "flex" },
          height: "770px",
        }}
      >
        <Grid container>
          <Grid item sm={6} sx={{ bgcolor: "#6424FF", position: "relative" }}>
            <a
              style={{ position: "absolute", top: "50px", left: "80px" }}
              href="/"
            >
              <img src={require("../assets/logo1.png")} />
            </a>
            <Box
              sx={{
                position: "absolute",
                top: "150px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                textAlign: "left",
                mx: "auto",
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                sx={{
                  textAlign: "left",
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  color: "white",
                }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "16px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    width: "307px",
                    height: "16px",
                  }}
                >
                  Attention Online Advertisers
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    fontWeight: 900,
                    fontSize: "45px",
                    lineHeight: "123.5%",
                    height: "186px",
                  }}
                >
                  What’s Your Online Advertising Readiness Rating?
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    width: "466px",
                    height: "68px",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "170%",
                  }}
                >
                  When you take this quiz, you’ll get a free report that
                  outlines YOUR Readiness Rating.
                </Typography>
                <Button
                  sx={{
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
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    width: "349px",
                    height: "34px",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "170%",
                  }}
                >
                  Learn more about Readiness Raitings
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            sx={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              position: "relative",
            }}
          >
            <Button
              sx={{
                position: "absolute",
                width: "169px",
                height: "44px",
                top: "50px",
                right: "50px",
                background: "#FFFFFF",
                boxShadow:
                  "0px 1.46202px 21.9303px rgba(0, 0, 0, 0.1), 0px 2.92404px 7.31009px rgba(0, 0, 0, 0.1)",
                color: "#333333",
                fontFamily: "SF Compact Display",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "20px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              START QUIZ
            </Button>

            <Box
              sx={{
                bottom: 0,
                bgcolor: "rgba(0, 0, 0, 0.3)",
                position: "absolute",
                width: "100%",
                color: "white",
                textAlign: "center",
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                component="p"
                sx={{
                  width: "580px",
                  height: "32px",
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "135%",
                  color: "#FFFFFF",
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                  textAlign: "center",
                  mx: "auto",
                }}
              >
                Learning about my rating - and WHAT to do about it, has really
                changed the way I do online advertising. It is all about being a
                master at this craft, and staying there. Andrea - Barranquilla,
                Colombia.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Navbar;
