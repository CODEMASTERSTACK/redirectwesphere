import React, { memo, useMemo } from "react";

const GradientButton = memo(({
  children,
  size = "md",
  className = "",
  gradientColors = [
    "#ff6d1b",
    "#ffee55",
    "#5bff89",
    "#4d8aff",
    "#6b5fff",
    "#ff64f9",
    "#ff6565",
  ],
  animationSpeed = 2,
  glowEffect = true,
  glowSize = 4,
  variant = "default",
  ...props
}) => {
  // Memoize gradient string to prevent re-computation
  const gradientString = useMemo(() => gradientColors.join(", "), [gradientColors]);

  // Size classes mapping
  const sizeClasses = {
    sm: "text-sm px-4 py-2 rounded-full",
    md: "text-base px-6 py-2 rounded-full",
    lg: "text-lg px-8 py-3 rounded-full",
    xl: "text-2xl px-10 py-4 rounded-full",
  };

  // Border styles based on variant
  const borderStyles = {
    default: "border-transparent",
    outline: "border-current",
    ghost: "border-transparent bg-opacity-10",
  };

  // Memoize button styles to prevent re-renders
  const buttonStyles = useMemo(() => ({
    background: variant === "ghost" ? `linear-gradient(90deg, ${gradientString})` : `linear-gradient(90deg, ${gradientString})`,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box, border-box",
    backgroundSize: "200%",
    animation: `gradient-animate ${animationSpeed}s infinite linear`,
  }), [variant, gradientString, animationSpeed]);

  // Memoize glow styles
  const glowStyles = useMemo(() => ({
    left: "50%",
    transform: "translateX(-50%)",
    background: `linear-gradient(90deg, ${gradientString})`,
    backgroundSize: "200%",
    animation: `gradient-animate ${animationSpeed}s infinite linear`,
  }), [gradientString, animationSpeed]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gradient-animate {
              0% { background-position: 0; }
              100% { background-position: 200%; }
            }
          `,
        }}
      />
      <button
        className={`
          relative bg-black dark:bg-white text-white dark:text-black 
          hover:bg-primary dark:hover:bg-primary/90
          flex items-center justify-center 
          border-[0.15rem] z-20 ${borderStyles[variant]} ${sizeClasses[size]} 
          ${className}
        `}
        style={buttonStyles}
        {...props}
      >
        {glowEffect && (
          <div
            className="absolute bottom-[-20%] h-[30%] w-[60%] z-[-1] blur-3xl"
            style={glowStyles}
          />
        )}

        {children}
      </button>
    </>
  );
});

GradientButton.displayName = 'GradientButton';

export default GradientButton;
