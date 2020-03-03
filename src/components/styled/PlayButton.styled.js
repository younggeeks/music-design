import React from 'react';
import styled from 'styled-components';

const PlayButton = styled.button`
  border-radius: 50%;
  background: ${props =>
    props.theme === 'dark' ? 'white' : '#502285'};
  border: none;
  box-shadow: 0 2px 19px rgba(48, 49, 88, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SmallPlayButton = styled(PlayButton)`
  height: 32px;
  width: 32px;
  img {
    height: 9px;
    margin: 0;
    padding: 0;
  }
`;
const LargePlayButton = styled(PlayButton)`
  height: 50px;
  width: 50px;
  img {
    height: 12px;
    margin: 0;
    padding: 0;
  }
`;
export { LargePlayButton, SmallPlayButton };
