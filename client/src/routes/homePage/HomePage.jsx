import React, { useContext } from "react";
import "./HomePage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real estate to buy or to rent</h1>
          <p>
            Discover your dream home with us. Whether you're looking to buy or rent,
            we offer a wide range of properties to suit all tastes and budgets. 
            Start your journey towards finding the perfect place today.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1 className="ha">16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1 className="ha">200+</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1 className="ha">1200+</h1>
              <h2>Properties Sold</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
