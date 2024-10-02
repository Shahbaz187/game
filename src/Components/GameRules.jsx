import React from 'react'
import styled from 'styled-components';
const GameRules = ({ setShowRule }) => {
    const hideRuleBox = (event) =>{
        setShowRule((prev) => !prev)
        console.log(event);
    }
  return (
    <RuleContainer onClick={() => hideRuleBox(event)}>
      <div className="box" onClick={(event)=>event.stopPropagation()}>
        <h1>How To Play Dice Game</h1>
        <div className="text">
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted </p>
        </div>
      </div>
    </RuleContainer>
  );
};

export default GameRules

const RuleContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3px);
  .box{
      background: wheat;
      height: 300px;
      width: 830px;
      padding: 20px 30px;
      border: 2px solid #000000a0;
      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      
  }
  h1 {
    font-size: 33px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    margin-top: 10px;
  }
`;
