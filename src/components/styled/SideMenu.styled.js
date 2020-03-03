import React from 'react';
import styled from 'styled-components';

const SideMenu = styled.div`
  flex-grow: 2;
  padding: 25px;
  background: #f5f6f9;

  .logo {
    margin-bottom: 30px;
    img {
      height: 19px;
    }
  }
  .side-menu {
    &__container {
      list-style: none;
      margin: 0 0 50px 0;
      padding: 0;

      li:first-child {
        color: #303158;

        opacity: 0.5;
      }
      li {
        margin-bottom: 15px;
        padding-left: 10px;

        a {
          display: flex;
          text-decoration: none;
          color: #303158;

          img {
            margin-right: 10px;
            height: 15px;
          }
        }
      }
    }
  }

  /* Hidding side menu  */
  @media only screen and (max-width: 1110px) {
    display: none;
  }
`;

export default SideMenu;
