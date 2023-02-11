import React from "react";
import Header from "./header/Header";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./body/Body";
import Footer from "./footer/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
