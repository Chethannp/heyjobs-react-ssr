import styled from "styled-components";
import { Link } from "react-router-dom";

const Breadcrumb = styled.div`
  font-size: 12px;
  margin: 20px 0;
  text-transform: uppercase;
`;

const Deck = styled.div`
  background: #fff;
  padding: 20px;
  margin: 15px 0;
  border-radius: 3px;
  h2 {
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
  }
  h3 {
    color: #174a77;
    font-size: 14px;
    text-transform: uppercase;
  }
  h4 span,
  h6 span {
    font-weight: 600;
  }
  h5 {
    font-size: 10px;
    font-weight: 100;
    background: #475b6d;
    color: #fff;
    padding: 0 10px;
    border-radius: 3px;
  }
  p {
    font-size: 12px;
  }
  ul {
    padding-left: 0px;
    margin: 5px 0;
    li {
      list-style-type: none;
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 600px;
  }
  @media only screen and (max-width: 499px) {
    h2 {
      font-size: 14px;
    }
    h3 {
      font-size: 12px;
    }
  }
  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
`;

const DeckDetails = styled(Deck)`
  padding: 20px;
  &:hover {
    box-shadow: none;
  }
  h4 {
    font-size: 16px;
    font-weight: 600;
  }
  @media only screen and (max-width: 768px) {
    background-color: #fff;
  }
`;

const ExpandableContent = styled.div`
  .fade {
    max-height: 100px;
    background: -webkit-linear-gradient(#333, #fff) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    -webkit-box-orient: vertical !important;
  }
`;

const Fade = styled.p`
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  background: -webkit-linear-gradient(#333, #eee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgb(0, 0, 0, 0.2);
  overflow: hidden;
`;

const DeckInline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeckSepeartor = styled.div`
  margin-bottom: 20px;
  .left {
    img {
      display: block;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 767px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .left {
      display: flex;
      flex: 20%;
      background: #fff;
      border: 1px solid #dfdfdf;
    }
    .right {
      padding-left: 10px;
      flex: 80%;
    }
  }
`;

const Svg = styled.img`
  height: 10px;
  display: inline-block;
  margin-right: 5px;
  vertical-align: baseline;
`;

const IconHolder = styled.img`
  display: block;
  height: 100px;
  margin: 20px auto;
`;

const InlineBlock = styled.span`
  display: inline-block;
  font-size: 10px;
  margin: 0 5px 5px;
  box-shadow: 0px 0px 1px #475b6d;
  padding: 0px 5px;
  text-transform: uppercase;
`;

const Button = styled.button`
  display: inline-block;
  color: #1f3a52;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #1f3a52;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 8px;
  cursor: pointer;
  margin: 8px 0;
  &:hover,
  &:focus {
    outline: none;
  }
`;

const Anchor = styled(Link)`
  cursor: pointer;
  color: #1f3a52;
  &:focus,
  &:active {
    color: inherit;
  }
  text-decoration: none;
`;

const OrderedList = styled.ol`
  list-style-type: number;
  font-size: 12px;
`;

const Error = styled.h2`
  padding: 20px 50px;
  text-align: center;
  font-size: 14px;
`;

export {
  Breadcrumb,
  Deck,
  DeckDetails,
  DeckInline,
  DeckSepeartor,
  Anchor,
  Svg,
  IconHolder,
  InlineBlock,
  Fade,
  Button,
  OrderedList,
  ExpandableContent,
  Error
};
