import { Content } from "./components/index";
import { Header, Footer, CarList,MostPopular } from "./sections/index";
import { Home, Profile } from "./Pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
function App() {
  return (
    <Router>
      <Header />
      <Content>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/CarList" element={<CarList/>} />
          <Route path="/MostPopular" element={<MostPopular/>} />
        </Routes>
      </Content>
      <Footer />
    </Router>
  );
}

export default App;
