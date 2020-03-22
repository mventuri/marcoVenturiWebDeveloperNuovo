import React from "react";
import "./App.css";
import AboutMeText from "./Components/AboutMeText";
import Grid from "@material-ui/core/Grid";
import Experience from "./Components/MyExperience";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Marco Venturi</h1>
        <span>Portfolio website</span>
      </header>
      <Grid container>
        <AboutMeText />
        <Experience />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
