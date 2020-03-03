import React from 'react';
import styled from 'styled-components';
import leftIcon from '../../assets/left-arrow.svg';
import rightIcon from '../../assets/right-arrow.svg';
const MusicContainer = styled.div`
  display: grid;
  padding: 20px 20px 0 0;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;

  @media only screen and (max-width: 1110px) {
    padding: 20px;
  }
  @media only screen and (max-width: 970px) {
    grid-template-columns: 2fr;
  }

  .heading {
    display: flex;
    align-items: center;
    height: 40px;
    margin: 20px 0;

    h3 {
      white-space: nowrap;
      opacity: 0.8;
    }

    .controls {
    }
  }
  .featured__song__container {
    display: grid;
  }
  .listening__history {
  }

  .horizontal-separator {
    background: #30315836;
    opacity: 0.3;
    width: 100%;
    height: 1px;
    flex-grow: 5;
    display: inline-block;
    margin: 0 10px;
  }

  .controls {
    display: flex;

    button {
      border: none;
      height: 30px;
      outline: none;
      cursor: pointer;
    }

    .leftIcon {
      background: url(${leftIcon}) no-repeat center;
    }
    .rightIcon {
      background: url(${rightIcon}) no-repeat center;
    }
  }
`;
export default MusicContainer;
