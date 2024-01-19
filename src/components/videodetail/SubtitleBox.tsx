"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useRecoilValue } from "recoil";
import { curTimeState } from "@/lib/atoms/getCurrenTime";

type Props = {
  subtitleList: subtitleContent[];
};
type subtitleContent = {
  time: string;
  text: string;
};

const SubtitleBox = ({ subtitleList }: Props) => {
  const [current, setCurrent] = useState(0);
  const curTime = useRecoilValue(curTimeState);
  const previousCard = () => {
    setCurrent(current - 1);
  };
  const nextCard = () => {
    setCurrent(current + 1);
  };

  const updateCard = () => {
    //現在の再生時間を取得、それに一番近いインデックスまでジャンプ
    // curTime = player.getCurrentTime();
    // index = 0;
    // for (index = 0; index < srtList.length; index++) {
    //   if (curTime < srtList[index]["time"]) {
    //     break;
    //   }
    // }
    // if (index > 0) {
    //   index = index - 1;
    // }
    // selectSrt(index);
    // setTimeout(updatePosition, 500);
  };

  const subtitleCard = subtitleList.map((content, index) => {
    return (
      <CardContent key={index} className="flex items-center justify-center gap-3 py-3">
        <Checkbox className="h-4 w-4" />
        <div>
          <p className="text-sm">{content.time}</p>
          <p className="text-base">{content.text}</p>
        </div>
      </CardContent>
    );
  });

  return (
    <>
      <Card className="mt-3 flex h-[120px] w-full justify-between rounded-sm bg-[#E2E8F0] shadow-none">
        {current > 0 ? (
          <button onClick={previousCard} className="pl-3">
            <ChevronsLeft className="h-8 w-8" />
          </button>
        ) : (
          <button className="disabled pl-3 opacity-40" disabled>
            <ChevronsLeft className="h-8 w-8" />
          </button>
        )}
        {subtitleCard[current]}
        {curTime}
        {current < subtitleList.length - 1 ? (
          <button onClick={nextCard} className="pr-3">
            <ChevronsRight className="h-8 w-8" />
          </button>
        ) : (
          <button className="disabled pr-3" disabled>
            <ChevronsRight className="h-8 w-8" />
          </button>
        )}
      </Card>
    </>
  );
};

export default SubtitleBox;
