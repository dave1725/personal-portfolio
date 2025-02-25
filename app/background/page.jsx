import React from "react";

const Background = () => {
  const stars = Array.from({ length: 200 });

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {stars.map((_, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomSize = Math.random() * 3 + 1; // 1px to 4px
        const glowSize = randomSize * 1; // Glow effect based on size

        return (
          <div
            key={index}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              top: `${randomY}%`,
              left: `${randomX}%`,
              opacity: Math.random() * 0.8 + 0.2, // 0.2 to 1
              boxShadow: `0 0 ${glowSize}px rgba(255, 255, 255, 0.8)`, // Soft glow
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Background;
