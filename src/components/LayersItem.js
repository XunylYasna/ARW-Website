import React from "react";

export default function LayersItem({ path }) {
  return (
    <div class="layers__item">
      <div
        class="layers__item-img"
        style={{backgroundImage: "url("+ path +")"}}
      />
    </div>
  );
}
