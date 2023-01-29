import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
