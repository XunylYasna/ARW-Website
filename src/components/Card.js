import React from "react";

export default function Card({ style, children, className, bgColor }) {
  return (

    <div
      className={`card ${className ? className : ""}`}
      style={{ backgroundColor: { bgColor }, ...style }}
    >
      {children}
    </div>
  );
}
