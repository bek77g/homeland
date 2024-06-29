import React from 'react';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./components/Personal/Login";
import Registration from "./components/Personal/Registration";
import PersonalList from "./components/Personal/PersonalList";
import PersonalDashboard from "./components/Personal/PersonalList";
const App = () => {
  return <div className="max-w-[1440px] mx-auto bg-white">
  <Header/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/property/:id"} element={<PropertyDetails/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/registration"} element={<Registration/>}/>
      <Route path={"/person"} element={<PersonalDashboard/>}/>
    </Routes>
    <Footer/>
  </div>;

};

export default App;
