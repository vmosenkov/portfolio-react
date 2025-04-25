import React from 'react';

// dependencies
import { useSpring, animated } from '@react-spring/web'

// styles
import "./header.scss"


const Header = () => {
   const springs = useSpring({
     from: { x: -10000 },
     to: { x: 0 },
   })
  return (
   <header className="header">
      <animated.div className="header__wrapper" style={{...springs,}}>
         <h1 className="header__title">
            <strong>
               <img
                  src="https://em-content.zobj.net/source/microsoft-teams/364/waving-hand_1f44b.png"
                  srcset="https://em-content.zobj.net/source/microsoft-teams/364/waving-hand_1f44b.png"
                  alt="Waving Hand on Microsoft Teams 1.0"
                  type="image/svg+xml"
                  width="64"
                  height="64"
               />
               Hi, I'm <em>Vladislav</em>
            </strong><br/>
            <span>I'm a</span><br/>
            <span>front-end developer</span><br/>
            <span>&</span><br/>
            <span>Beginner 3d artist</span><br/>
         </h1>
         <div className="header__text">
            <p>with passion for learning and creating.</p>
         </div>
         {/* <span>#3d, #design, #animation, #blender3d</span> */}
         {/* <ABtn href="#!">Download CV</ABtn> */}
      </animated.div>
   </header>
  )
}

export default Header