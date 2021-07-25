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
      <Route path="/" component={Homepage} />
    </ThemeProvider>
  );
};

export default App;
