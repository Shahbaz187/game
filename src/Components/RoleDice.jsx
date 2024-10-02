import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({ CurrentDice, getDice }) => {
  return (
    <DiceContainer>
      <div className="dice-img" onClick={getDice}>
        <img src={`images/dice/dice_${CurrentDice}.png`} alt="IMG NOT FOUND" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice

const DiceContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice-img{
    cursor: pointer;
  }
   p {
    font-size: 24px;
  }
`;