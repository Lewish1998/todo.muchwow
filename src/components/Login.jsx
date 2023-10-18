import React, { useState } from 'react';
import "./style/login.css"

function Login() {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const maxX = window.innerWidth - 100; // Adjust for the button's width
    const maxY = window.innerHeight - 40;  // Adjust for the button's height

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setButtonPosition({ x: randomX }); //, y: randomY
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        className="moving-button"
        style={{ top: buttonPosition.y, left: buttonPosition.x, position: 'absolute', transition: 'left 0.5s, top 0.5s' }}
        onMouseEnter={handleMouseMove}
      >
        Click Me to Log In!
      </button>
    </div>
  );
}

export default Login;
