import { Route } from "react-router-dom";
import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import themes from "./themes/schema.json";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
