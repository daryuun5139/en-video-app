import React from "react";
import TiptapEditor from "@/components/videodetail/TiptapEditor";

type Props = {
  tiptapInitialContent: JSX.Element[];
};

const TranscriptContainer = ({ tiptapInitialContent }: Props) => {
  return (
    <>
      <h2 className="text-lg font-bold">TRANSCRIPT</h2>
      <p>Note: This is not a word-for-word transcript.</p>
      <div className="pt-3">
        {tiptapInitialContent.map((content, index) => (
          <TiptapEditor key={index} content={content} />
        ))}
      </div>
    </>
  );
};

export default TranscriptContainer;
