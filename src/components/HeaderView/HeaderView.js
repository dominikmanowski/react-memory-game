import React from "react";
import styled from "styled-components";

const HeadingWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #04151f;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #fefffe;
`;

const Header = ({ title }) => {
  return (
    <HeadingWrapper>
      <Heading>{title}</Heading>
    </HeadingWrapper>
  );
};

export default Header;
