import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 50px;
  color: #fff;
  background-color: #475b6d;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 16px 0px;
  padding: 0 10px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const RightMenu = styled.div`
  font-size: 14px;
`;

const Anchor = styled(Link)`
  color: #fff;
  &:focus,
  &:active {
    color: #fff;
  }
  text-decoration: none;
`;

const HeaderBlockComp = () => {
  return (
    <Header id="header">
      <Anchor to="/">
        <Logo>Hey Jobs</Logo>
      </Anchor>
      <RightMenu>
        <Anchor to="">Login</Anchor>
      </RightMenu>
    </Header>
  );
};

export default HeaderBlockComp;
