import React from 'react';
import styled from 'styled-components';
import heroBg from '../../assets/heroBg.png';
import hero from '../../assets/hero.png';
import listener from '../../assets/1.svg';
const MainContent = styled.div`
  flex-grow: 28;
  padding-left: 20px;
  padding-bottom: 20px;

  @media only screen and (max-width: 1110px) {
    padding: 0;
  }

  .hero {
    height: 350px;
    background: url(${listener}), url(${heroBg}), url(${hero});
    background-size: cover;
    background-position: top;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;

    svg {
      position: absolute;
      top: 10px;
      left: 20px;
      color: #502285;
      cursor: pointer;
      fill: #502285;
      z-index: 5;
    }

    .listener {
      position: absolute;
      top: -75px;
      left: 0;
    }
  }
  .featured__song {
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    margin-left: 80px;

    .featured_song_button {
      padding: 12px 25px;
      border: none;
      background: none;
      background-color: rgba(80, 34, 133, 0.12);
      color: #502285;
      border-radius: 5px;
      font-size: 16px;
      max-width: 300px;
    }

    .play__button {
    }
    .song__name {
      color: #303158;
      font-size: 45px;
      margin: 15px 0;
    }
    .artist__name {
      color: rgba(48, 49, 88, 0.5);
      font-size: 25px;
      margin-bottom: 15px;
    }
  }
  .top-right {
    &__menu {
      position: absolute;
      top: 10px;
      right: 25px;
      display: flex;
      align-items: center;
      ul {
        list-style: none;
        display: flex;
        li {
          &:not(:last-child) {
            margin-right: 17px;
          }

          a {
            img {
              height: 19px;
            }
          }
        }
      }
      .user {
        height: 32px;
        border-radius: 50%;
        margin-left: 20px;
      }
    }
  }
`;

export default MainContent;
