import React from 'react'
import styled from 'styled-components';
const TotalScore = ({ Score }) => {
  return (
    <ScoreContainer>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
h1{
    font-size: 90px;
    font-weight: 500;
    line-height: 90px;
}
p{
    font-size: 24px;
    font-weight: 500;
}
`;