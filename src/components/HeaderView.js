import React from "react";
import PropTypes from "prop-types";
import "./HeaderView.scss";

const Header = ({ title }) => {
  return (
    <header className="heading-wrapper">
      <h1 className="heading">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
