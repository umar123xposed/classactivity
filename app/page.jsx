// pages/index.js
// pages/index.js
"use client";
import { useState, useEffect } from 'react';

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const changeBackgroundColor = () => {
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#000000", "#ffffff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div>
      <button onClick={changeBackgroundColor}>Change Background Color</button>
      {/* You can add other components here */}
    </div>
  );
};

export default Home;

