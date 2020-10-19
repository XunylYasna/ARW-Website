import React from "react";

export default function CommitteeItem({ name, children }) {
  return (
    <div className="committee-item">
      <div className="header-box">
        <h1 className="sub-title">{name}</h1>
        <span className="team-heads text-content">TEAM HEADS</span>
      </div>
      <div className="card-container">{children}</div>
      <div className="footer-box">
        <div className="sub-title text-content">Assistant Team Heads</div>
        <div className="assistant-heads text-content">
          <h1 className="text-content">name</h1>
          <h1 className="text-content">name</h1>
          <h1 className="text-content">name</h1>
          <h1 className="text-content">name</h1>
          <h1 className="text-content">name</h1>
          <h1 className="text-content">name</h1>
          <h1 className="text-content">name</h1>
          <h1 className="text-content">name</h1>
        </div>
      </div>
    </div>
  );
}
