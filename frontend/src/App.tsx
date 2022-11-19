import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#38E5FC",
        main: "#38E5FC",
        dark: "#38E5FC",
        contrastText: "#000",
      },
      secondary: {
        main: "#5C92F2",
        light: "#5C92F2",
        dark: "#5C92F2",
        contrastText: "#000",
      },
      info: {
        main: "#3546F2",
        light: "#3546F2",
        dark: "#3546F2",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
