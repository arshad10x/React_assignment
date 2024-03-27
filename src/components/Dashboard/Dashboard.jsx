import React from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Product from "../Products/Product";
import "../../App.css";
const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Product />
    </div>
  );
};

export default Dashboard;
