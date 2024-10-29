// BirthdayCard.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Card = styled(animated.div)`
  width: 300px;
  padding: 20px;
  background-color: #ffefd5;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: auto;
`;

const BirthdayCard = ({ name, message, image }) => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Card style={fade}>
      <img src={image} alt="Birthday" style={{ width: '100%', borderRadius: '10px' }} />
      <h2>Happy Birthday, {name}!</h2>
      <p>{message}</p>
    </Card>
  );
};

export default BirthdayCard;
