import React from "react";
import "./HeaderView.scss";

const Header = ({ title }) => {
  return (
    <header className="heading-wrapper">
      <h1 className="heading">{title}</h1>
    </header>
  );
};

export default Header;
