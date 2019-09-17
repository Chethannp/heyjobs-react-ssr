import styled from "styled-components";

const SearchBar = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 600px;
  }
`;
const InputSearchBox = styled.input`
  flex: 95%;
  box-sizing: border-box;
  border: 1px solid #888;
  border-right: none;
  border-radius: 0;
  box-shadow: none;
  font: 12px;
  height: 30px;
  padding: 2px 12px 0;
  color: #1f3a52;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #fff;
  &:focus {
    border: 1px solid #1f3a52;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  flex: 5%;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  padding: 0.35em 0.75em;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
  }
`;

export { SearchBar, InputSearchBox, SubmitButton };
