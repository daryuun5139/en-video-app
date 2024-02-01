// 動画画面下Subtitle部分
"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useRecoilValue, useRecoilState } from "recoil";
import { currentTimeState } from "@/lib/atoms/getCurrentTime";
import { subtitleCheckedList } from "@/lib/atoms/subtitleCheckedList";

type Props = {
  subtitleList: subtitleData[];
};
type subtitleData = {
  index: number;
  time: string;
  seconds?: number | undefined;
  text: string;
};

const SubtitleBox = ({ subtitleList }: Props) => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const currentTime = useRecoilValue(currentTimeState);
  const [checkedList, setCheckedList] = useRecoilState(subtitleCheckedList);

  const removeCheckedList = (list: number[], index: number) => {
    return [...list.slice(0, index), ...list.slice(index + 1)];
  };

  // subtitleCardにチェックを入れたらcheckedListに値を入れる,はずしたらcheckedListから値を除く
  const onChecked = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.currentTarget.value);
    if (event.target.checked === true) {
      if (!checkedList.includes(targetValue)) {
        setCheckedList((list) => [...list, targetValue]);
      }
    } else {
      const targetIndex = checkedList.indexOf(targetValue);
      const newList = removeCheckedList(checkedList, targetIndex);
      setCheckedList(newList);
    }
  };

  // subtitleを時間ごとに切り替える
  useEffect(() => {
    for (let i = 0; i < subtitleList.length; i++) {
      if (Math.floor(currentTime + 1) === Number(subtitleList[i]["seconds"])) {
        setCurrentSubtitle(i);
        break;
      }
    }
  }, [currentTime]);

  // onClickで前のカードに戻る(previousCard)、次のカードに進む(nextCard)
  const previousCard = () => {
    setCurrentSubtitle(currentSubtitle - 1);
  };
  const nextCard = () => {
    setCurrentSubtitle(currentSubtitle + 1);
  };

  // subtitleのカードを表示--------------------------------------
  const subtitleCard = subtitleList.map((content, index) => {
    const checkedOrNot = (): boolean => {
      if (checkedList.includes(currentSubtitle)) {
        return true;
      } else {
        return false;
      }
    };
    return (
      <>
        <div key={index} className="flex h-full w-full flex-col items-start">
          <input
            type="checkbox"
            id={`${index}`}
            className="peer absolute left-20 top-1/3 h-7 w-7"
            onChange={onChecked}
            value={index}
            checked={checkedOrNot()}
          />
          <label
            htmlFor={`${index}`}
            className="h-full w-full rounded-sm border-slate-500 hover:cursor-pointer hover:border-2 hover:bg-slate-300 peer-checked:border-2 peer-checked:bg-slate-300"
          >
            <p className="ml-14 flex text-sm font-extralight">{content.time}</p>
            <p className="ml-14 flex text-lg font-extralight leading-6 tracking-widest">
              {content.text}
            </p>
          </label>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="relative flex h-[120px] w-full justify-between rounded-b-sm bg-[#E2E8F0] py-2">
        {currentSubtitle > 0 ? (
          <button onClick={previousCard} className="pl-3">
            <ChevronsLeft className="h-14 w-14 hover:cursor-pointer" />
          </button>
        ) : (
          <button className="disabled pl-3 opacity-20" disabled>
            <ChevronsLeft className="h-14 w-14" />
          </button>
        )}
        {subtitleCard[currentSubtitle]}
        {currentSubtitle < subtitleList.length - 1 ? (
          <button onClick={nextCard} className="pr-3">
            <ChevronsRight className="h-14 w-14 hover:cursor-pointer" />
          </button>
        ) : (
          <button className="disabled pr-3 opacity-20" disabled>
            <ChevronsRight className="h-14 w-14" />
          </button>
        )}
      </div>
    </>
  );
};

export default SubtitleBox;
