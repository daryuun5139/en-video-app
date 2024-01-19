// "use client";

import React, { useRef } from "react";
import VideoPlayer from "@/components/videodetail/VideoPlayer";
import { sampledata } from "@/lib/sampledata";
import SubtitleBox from "@/components/videodetail/SubtitleBox";
import RelateWordBox from "@/components/videodetail/RelateWordBox";
import TranscriptContainer from "@/components/videodetail/TranscriptContainer";
import WordMemoBox from "@/components/videodetail/WordMemoBox";

type Props = {};

interface PlayerRef {
  getCurrentTime(): Promise<number>;
  getDuration(): Promise<number>;
}

const VideoDetail = (props: Props) => {
  const tiptapInitialContent = sampledata.subtitleList.map((n) => <p className="px-1 py-2">{n}</p>);
  // const ref = useRef<PlayerRef | null>(null);
  // const currentTime = await ref.current?.getCurrentTime().then((value) => {
  //   return value;
  // });

  return (
    <div className="py-5">
      {/* Upper Content -----------------------------------------------*/}
      <div className="flex h-[600px] justify-between gap-3">
        {/* Upper Left Content */}
        <div className="flex grow flex-col">
          <h1 className="text-3xl font-bold">{sampledata.title}</h1>
          <VideoPlayer />
          <SubtitleBox subtitleList={sampledata.subtitleList2} />
        </div>
        {/* Upper Right Content */}
        <div className="flex w-[400px]">
          <RelateWordBox />
        </div>
      </div>
      {/* Lower Content ----------------------------------------------- */}
      <div className="flex justify-between gap-3 pt-12">
        {/* Lower Content Left */}
        <div className="flex grow flex-col">
          <TranscriptContainer tiptapInitialContent={tiptapInitialContent} />
        </div>
        {/* Lower Content Right*/}
        <div className="flex w-[400px] pt-3">
          <WordMemoBox />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
