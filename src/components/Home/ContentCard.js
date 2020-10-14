import React from "react";
import landingVideo from "assets/images/ARW Landing.mp4";

const ContentCard = ({ children, left }) => {
  return (
    <div
      className="content-card"
      style={{
        marginRight: `${left ? "16px" : null}`,
      }}
    >
      {children}
    </div>
  );
};

export default ContentCard;
