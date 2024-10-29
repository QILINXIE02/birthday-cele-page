import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const BirthdayCard = ({ name, date }) => {
  return (
    <Card>
      <Title>{name}</Title>
      <p>Birthday: {date}</p>
    </Card>
  );
};

export default BirthdayCard;
