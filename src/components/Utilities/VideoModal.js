import React, { useEffect, useState } from "react";
import { gsap, TweenMax, Power1, Power2, TimelineMax } from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
gsap.registerPlugin(ExpoScaleEase);

export default function VideoModal({ link }) {
  const rotateTL = new TimelineMax({ paused: true })
    .to(
      ".play-circle-01",
      0.7,
      {
        opacity: 0.1,
        rotation: "+=360",
        strokeDasharray: "456 456",
        ease: Power1.easeInOut,
      },
      0
    )
    .to(
      ".play-circle-02",
      0.7,
      {
        opacity: 0.1,
        rotation: "-=360",
        strokeDasharray: "411 411",
        ease: Power1.easeInOut,
      },
      0
    );

  const openTL = new TimelineMax({ paused: true })
    //   .to(
    //     ".play-backdrop",
    //     1,
    //     {
    //       opacity: 0.95,
    //       visibility: "visible",
    //       ease: Power2.easeInOut,
    //     },
    //     0
    //   )
    .to(
      ".play-close",
      1,
      {
        opacity: 1,
        ease: Power2.easeInOut,
      },
      0
    )
    .to(
      ".play-perspective",
      1,
      {
        xPercent: 0,
        scale: 1,
        ease: Power2.easeInOut,
      },
      0
    )
    .to(
      ".play-triangle",
      1,
      {
        scaleX: 1,
        ease: ExpoScaleEase(2, 1, Power2.easeInOut),
      },
      0
    )
    .to(
      ".play-triangle",
      1,
      {
        rotationY: 0,
        ease: ExpoScaleEase.config(10, 0.01, Power2.easeInOut),
      },
      0
    )
    .to(
      ".play-video",
      1,
      {
        visibility: "visible",
        opacity: 1,
      },
      0.5
    );

  useEffect(() => {
    TweenMax.set(".play-circle-01", {
      rotation: 90,
      transformOrigin: "center",
    });

    TweenMax.set(".play-circle-02", {
      rotation: -90,
      transformOrigin: "center",
    });

    TweenMax.set(".play-perspective", {
      xPercent: 6.5,
      scale: 0.175,
      transformOrigin: "center",
      perspective: 1,
    });

    TweenMax.set(".play-video", {
      visibility: "hidden",
      opacity: 0,
    });

    TweenMax.set(".play-triangle", {
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
      rotationY: 10,
      scaleX: 2,
    });
  }, []);
  return (
    <div
      class="play-button"
      onMouseOver={(e) => rotateTL.play()}
      onMouseLeave={(e) => rotateTL.reverse()}
      onClick={(e) => openTL.play()}
    >
      <svg class="play-circles" viewBox="0 0 152 152">
        <circle
          class="play-circle-01"
          fill="none"
          stroke="#fff"
          stroke-width="3"
          stroke-dasharray="343 343"
          cx="76"
          cy="76"
          r="72.7"
        />
        <circle
          class="play-circle-02"
          fill="none"
          stroke="#fff"
          stroke-width="3"
          stroke-dasharray="309 309"
          cx="76"
          cy="76"
          r="65.5"
        />
      </svg>
      <div class="play-perspective">
        <button class="play-close"></button>
        <div class="play-triangle">
          <div class="play-video">
            <iframe
              width="600"
              height="400"
              src={link}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
