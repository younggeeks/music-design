import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
  background: rgba(80, 34, 133, 0.05);
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .player__avatar {
    border-radius: 50%;
    height: 140px;
    width: 140px;
    position: relative;
    display: flex;
    border: 5px solid rgba(80, 34, 133, 1);
    border-radius: 50%;
    border-top-color: rgba(80, 34, 133, 0.15);
    height: 130px;
    width: 130px;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 90px;
      width: 90px;
      border-radius: 50%;
    }
  }
`;
export default Player;
