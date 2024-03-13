// 動画画面部分

"use client";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import { currentTimeState } from "@/lib/atoms/getCurrentTime";
import { Youtube } from "lucide-react";

type Props = {
  url: string;
};

const VideoPlayer = ({ url }: Props) => {
  const [hasWindow, setHasWindow] = useState(false);
  const playerRef = useRef<ReactPlayer | null>(null);
  const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const playerOptions = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
    },
  };

  return (
    <div className="h-full w-full rounded-t-sm bg-[#E2E8F0] p-4 pb-0">
      {hasWindow && (
        <ReactPlayer
          ref={(player) => {
            playerRef.current = player;
          }}
          url={url}
          config={{ youtube: playerOptions }}
          width="100%"
          height="100%"
          playIcon={<button>saisei</button>}
          onProgress={(progress) => {
            setCurrentTime(progress.playedSeconds);
          }}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
