import React from 'react';
import styled from 'styled-components';

const SongListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.theme === 'light' ? '' : '#F2F3F6'};
  border-radius: 9px;
  padding: 10px 15px;

  .song__name {
    color: #303158;
  }
  .artist__name {
    color: #303158;
    opacity: 50%;
  }
  .time {
    color: #502285;
  }

  img {
    height: 50px;
    justify-self: flex-start;
  }
`;

export const SongListDark = styled(SongListItem)`
  background: none;
  .song__name {
    color: white;
  }
  .artist__name {
    color: white;
    opacity: 50%;
  }
  .time {
    color: white;
  }
`;

export default SongListItem;
