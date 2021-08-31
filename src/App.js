import { Route } from "react-router-dom";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import themes from "./themes/schema.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage";
import Experience from "./Pages/Experience";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

AOS.init();

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.dark);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar
        setSelectedTheme={setSelectedTheme}
        selectedTheme={selectedTheme}
        themes={themes}
      />
      <Route
        exact
        path="/"
        component={() => (
          <div data-aos="fade-in">
            <Homepage />
          </div>
        )}
      />
      <Route
        exact
        path="/experience"
        component={() => (
          <div data-aos="fade-in">
            <Experience />
          </div>
        )}
      />
      <Route
        exact
        path="/projects"
        component={() => (
          <div data-aos="fade-in">
            <Portfolio />
          </div>
        )}
      />
      <Route exact path="/contact" component={() => (
          <div data-aos="fade-in">
            <Contact />
          </div>
        )} />
    </ThemeProvider>
  );
};

export default App;
