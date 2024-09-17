import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './style.css';  // Import your CSS here

function App() {
  return (
    <div className="page__body">
      <div className="page__wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
  
    </div>


  );
}

export default App;
