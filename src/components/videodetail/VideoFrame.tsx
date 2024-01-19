"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "videojs-youtube";
import "video.js/dist/video-js.css";

type Props = {};

const options = {
  autoplay: true,
  controls: true,
  responsive: true,
  fluid: true,
  techOrder: ["html5", "youtube"],
  sources: [
    {
      src: "https://www.youtube.com/embed/qB8NBQokME0?si=GLNwcO-BxZ-VmdUn",
      type: "video/youtube",
    },
    {
      track: {
        kind: "subtitles",
        src: "/sample_1.vtt",
        srclang: "en",
        label: "English",
      },
    },
  ],
};

const VideoFrame = (props: Props) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  const onReady = (player: Player) => {
    playerRef.current = player;
    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });
    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current?.appendChild(videoElement);
      videoElement.appendChild(document.createElement("track"));
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
      console.log(player.currentTime());
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);
  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoFrame;
