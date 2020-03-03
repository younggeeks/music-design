import React from 'react';

import styled from 'styled-components';

const Slider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));

  /* Extra small devices (phones, 520px and down) */
  @media only screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export default Slider;
