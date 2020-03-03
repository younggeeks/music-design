import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-left: 0;
  }
  margin: 0 8px;

  .card__info {
    display: flex;
    flex-direction: column;
    .card__song-name {
      color: #303158;
    }
    .card__artist-name {
      font-size: 90%;
      color: #303158;
      opacity: 0.5;
    }
  }
`;

export default Card;
