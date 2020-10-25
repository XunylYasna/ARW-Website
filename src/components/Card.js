import React from "react";

export default function Card({
  style,
  children,
  className,
  bgColor,
  dataSal,
  duration,
  delay,
}) {
  return (
    <div
      className={`card ${className ? className : ""}`}
      style={{ backgroundColor: { bgColor }, ...style }}
      data-sal={dataSal ? dataSal : ""}
      data-sal-duration={duration ? duration : ""}
      data-sal-delay={delay ? delay : ""}
    >
      {children}
    </div>
  );
}
