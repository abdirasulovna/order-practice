import React from "react";
import maelsmage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import  HeaderButton  from "./HeaderButton";

 function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={maelsmage} alt="food" />
      </div>
    </>
  );
}
export default Header;