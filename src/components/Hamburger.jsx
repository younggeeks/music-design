import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const HamburgerMenu = () => {
  const hamburger = useRef(null);
  const top = useRef(null);
  const mid = useRef(null);
  const bottom = useRef(null);
  const [menuClicked, setMenuClickedAction] = useState(null);
  const [tl] = useState(
    gsap.timeline({
      paused: true,
      reversed: true,
    }),
  );

  useEffect(() => {
    // setMenuClickedAction(

    // tl.from(mid.current, {
    //   x: 9,
    //   ease: 'back',
    // });
    setMenuClickedAction(
      tl.add('s'),
      tl
        .to(
          top.current,
          0.2,
          {
            y: '-2px',
            transformOrigin: '50% 50%',
          },
          '<',
        )
        .to(
          bottom.current,
          0.2,
          {
            y: '2px',
            transformOrigin: '50% 50%',
          },
          '<',
        )
        .to(
          mid.current,
          0.2,
          {
            scale: 0.1,
            transformOrigin: '50% 50%',
          },
          '<',
        )
        .add('rotate')
        .to(top.current, 0.2, { y: '5' }, 'rotate')
        .to(bottom.current, 0.2, { y: '-5' }, 'rotate')
        .to(top.current, 0.2, {
          rotationZ: 45,
          transformOrigin: '50% 50%',
        })
        .to(bottom.current, 0.2, {
          rotationZ: -45,
          transformOrigin: '50% 50%',
        }),
      // .fromTo('#side-menu', { visibility: 'visible', duration: 2 }),
    );
    // .set('#burger .mid.current', {opacity:0})//temp fix for stupid iOS rotate y bug
  }, [tl]);

  return (
    <svg
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      ref={hamburger}
      onClick={() => {
        if (menuClicked.reversed()) {
          menuClicked.restart();
        } else {
          menuClicked.reverse();
        }
      }}
    >
      <path ref={top} d="M0 9h30v2H0z" />
      <line
        ref={mid}
        x1="0"
        y1="15"
        x2="30"
        y2="15"
        stroke="black"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path ref={bottom} d="M0 19h30v2H0z" />
    </svg>
  );
};

export default HamburgerMenu;
