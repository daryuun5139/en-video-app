"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import { curTimeState } from "@/lib/atoms/getCurrenTime";

// type PlayerComponent = React.ForwardRefExoticComponent<React.RefAttributes<PlayerRef>>;

interface PlayerRef {
  getCurrentTime(): Promise<number>;
  getDuration(): Promise<number>;
}

const VideoPlayer = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const playerRef = useRef<ReactPlayer | null>(null);
  const [curTime, setCurTime] = useRecoilState(curTimeState);
  const [currentTime1, setCurrentTime1] = useState(0);
  const [playedbyou, setPlayedbyou] = useState(0);
  const [played, setPlayed] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const getCurrentTime = () => {
    const currentTime = playerRef.current?.getCurrentTime();
    if (currentTime === undefined) {
      throw new Error("Could not get current time from react-player");
    }

    return Promise.resolve(currentTime);
  };

  // const onClick = () => {
  //   getCurrentTime().then((value) => {
  //     console.log(value);
  //     setCurTime(value);
  //     // Expected output: "Success!"
  //   });
  // };
  // useEffect(() => {
  //   playerRef.current?.seekTo(seekToInSeconds, "seconds");
  // }, [playerRef, seekToInSeconds]);

  const playerOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: true,
      rel: 0,
    },
  };

  return (
    <div className="h-full w-full rounded-sm pt-2">
      {hasWindow && (
        <ReactPlayer
          ref={(player) => {
            playerRef.current = player;
          }}
          url={"https://www.youtube.com/embed/qB8NBQokME0?si=GLNwcO-BxZ-VmdUn"}
          config={{ youtube: playerOptions }}
          width="100%"
          height="100%"
          // controls={true}
          // onStart={() => {
          //   getCurrentTime().then((value) => console.log(value));
          // }}
          onProgress={(progress) => {
            setPlayed(progress.played);
            setPlayedbyou(progress.playedSeconds);
            console.log(played);
            console.log(playedbyou);
          }}
        />
      )}
      {/* <button onClick={onClick} className="bg-red-400">
        push
      </button> */}
    </div>
  );
};

export default VideoPlayer;
