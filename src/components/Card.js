import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="image-container">
        <img src="https://i.guim.co.uk/img/media/3aab8a0699616ac94346c05f667b40844e46322f/0_123_5616_3432/master/5616.jpg?width=445&quality=85&auto=format&fit=max&s=f36ad0687e104725c985cdf26bfb402e"></img>
      </div>
      <div className="description">
        <span id="surname">
            surname
        </span>
        <br />
        <span id="name">
            name
        </span>
        <br />
        <span id="position">
            position
        </span>
      </div>
    </div>
  );
}
