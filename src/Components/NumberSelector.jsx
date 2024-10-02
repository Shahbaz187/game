import React from "react";
import { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({ SelectedNumber, setSelectedNumber, errors }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <SelectorContainer>
        <p className="error">{errors}</p>
      <div className="flex">
        {arr.map((value) => {
          return (
            <Box
              IsSelected={value === SelectedNumber}
              key={value}
              onClick={() => setSelectedNumber(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p className="text">Select Number</p>
    </SelectorContainer>
  );
};

export default NumberSelector;
const SelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 23px;
  }
  .text{
    font-size: 24px;
    font-weight: 700;
    text-align: end;
    margin-top: 10px;
  }
  .error{
    text-align: end;
    font-size: 18px;
    margin-bottom: 20px;
    color: red;

  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background: ${(props) => (props.IsSelected ? "black" : "White")};
  color: ${(props) => (props.IsSelected ? "white" : "black")};
`;
