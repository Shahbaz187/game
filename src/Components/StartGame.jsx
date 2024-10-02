import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dices.png" alt="IMG NOT FOUND" />
      </div>
      <div className="contant">
        <h1>Dice Game</h1>
        <NavLink to={'/play'}><Button onClick={toggle}>Play Now</Button></NavLink>
      </div>
    </Container>
  );
};

export default StartGame

const Container = styled.div`
  height: 100vh;
  max-width: 1180px;
  margin: auto;
  display: flex;
  align-items: center;

  .contant {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  min-width: 220px;
  padding: 6px 20px;
  background: black;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s linear;
  a {
    text-decoration: none;
    color: white;
  }
`;