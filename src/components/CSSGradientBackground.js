import React from 'react';

const CSSGradientBackground = ({ 
  className = "",
  intensity = 1.0,
  speed = 1.0,
  colors = {
    color1: '#ff6b6b',
    color2: '#4ecdc4',
    color3: '#45b7d1',
    color4: '#96ceb4',
    color5: '#f093fb',
    color6: '#f5576c'
  }
}) => {
  const animationDuration = `${20 / speed}s`;
  
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, ${colors.color1} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${colors.color2} 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${colors.color3} 0%, transparent 50%),
            radial-gradient(circle at 60% 60%, ${colors.color4} 0%, transparent 50%),
            radial-gradient(circle at 10% 10%, ${colors.color5} 0%, transparent 50%),
            radial-gradient(circle at 90% 90%, ${colors.color6} 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
          `,
          animation: `gradientShift ${animationDuration} ease-in-out infinite alternate`,
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              ${colors.color1} 0deg, 
              ${colors.color2} 60deg, 
              ${colors.color3} 120deg, 
              ${colors.color4} 180deg, 
              ${colors.color5} 240deg, 
              ${colors.color6} 300deg, 
              ${colors.color1} 360deg
            )
          `,
          animation: `rotateGradient ${animationDuration} linear infinite`,
          mixBlendMode: 'overlay',
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            linear-gradient(45deg, 
              ${colors.color1} 0%, 
              transparent 25%, 
              ${colors.color2} 50%, 
              transparent 75%, 
              ${colors.color3} 100%
            )
          `,
          animation: `waveMotion ${animationDuration} ease-in-out infinite alternate`,
        }}
      />
      
    </div>
  );
};

export default CSSGradientBackground;
