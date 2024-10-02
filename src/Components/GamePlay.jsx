import React from "react";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import GameRules from "./GameRules";

const GamePlay = () => {
  const [SelectedNumber, setSelectedNumber] = useState(1);
  const [CurrentDice, setCurrentDice] = useState(1);
  const [Score, setScore] = useState(0);
  const [errors, seterrors] = useState(" ");
  const [ShowRule, setShowRule] = useState(false)

  const genrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const getDice = () => {
    if (!SelectedNumber) {
      seterrors("You Have Not Selected Any Number");
      return;
    }
    seterrors(" ");
    const randomNumber = genrateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (SelectedNumber === randomNumber) {
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
const showRuleToggle = () =>{
  setShowRule((prev) => !prev)
  console.log(ShowRule);
}
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore Score={Score} />
        <NumberSelector
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
          errors={errors}
        />
      </div>
      <RoleDice CurrentDice={CurrentDice} getDice={getDice} />
      <ResetButton onClick={()=> setScore(0)}>Reset Score</ResetButton>
      <RuleButton onClick={showRuleToggle}>{ShowRule ? 'Hide Rule' : 'Show Rule'}</RuleButton>
      {ShowRule && <GameRules setShowRule={setShowRule}/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding: 50px 30px;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
const ResetButton = styled.button`
display: block;
margin: auto;
margin-top: 2rem;
min-width: 220px;
  padding: 6px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s linear;
  background: #ffffff;
  border: 1px solid black;
  color: black;
  &&:hover {
    background: black;
    border: 1px solid transparent;
    color: white;
  }
`;
const RuleButton = styled.button`
display: block;
margin: auto;
margin-top: 1rem;
min-width: 220px;
  padding: 6px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s linear;
    background: black;
    border: 1px solid transparent;
    color: white;
`;
