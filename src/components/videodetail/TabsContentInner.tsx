// TabsContentの中身
"use client";

import { useRecoilState } from "recoil";
import { subtitleCheckedList } from "@/lib/atoms/subtitleCheckedList";
import { ChangeEvent } from "react";
import TiptapEditor from "@/components/videodetail/TiptapEditor";
import "../../style/tiptap.css";

type Props = {
  tiptapInitialContentList: (subtitleData | undefined)[];
};
type subtitleData = {
  index: number;
  time: string;
  seconds?: number | undefined;
  text: string;
};

const TabsContentInner = ({ tiptapInitialContentList }: Props) => {
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
  // checkedListに値が入っていたらtrue,入っていなかったらfalseを返す
  const checkedOrNot = (index: number): boolean => {
    if (checkedList.includes(index)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <input id="check1" type="checkbox" className="open-check1 invisible" />
      {tiptapInitialContentList[0] ? (
        <>
          <div className="open-content1 relative flex h-[300px] flex-col overflow-hidden">
            {tiptapInitialContentList.map((n, index) => (
              // {/* チェックボックスがチェックされると色が変更される */}
              <div
                className="relative flex border-b-2 border-dashed pb-2"
                key={`subtitle1_${index}`}
              >
                <input
                  id={`checked${index}`}
                  type="checkbox"
                  className="peer absolute left-3 top-1 h-5 w-5 hover:cursor-pointer"
                  value={n?.index!}
                  onChange={onChecked}
                  checked={checkedOrNot(n?.index!)}
                />
                <label
                  htmlFor={`checked${index}`}
                  className="h-full w-full rounded-sm border-slate-500 hover:cursor-pointer peer-checked:border-2 peer-checked:bg-slate-300"
                >
                  <div className="relative">
                    <h3 className="pl-10">{n?.time}</h3>
                    {/* 開閉アイコンをクリックでsubtitleが表示される----------------------- */}
                    <div className="pb-0 pt-3">
                      <input
                        id={`subtitleOpenClose${index}`}
                        type="checkbox"
                        className="open-check2 hidden"
                      />
                      <div className="open-content2 overflow-hidden">
                        <TiptapEditor time={n?.time} text={n?.text} />
                      </div>
                      <label
                        htmlFor={`subtitleOpenClose${index}`}
                        className="open-label2 absolute right-10 top-2 hover:cursor-pointer"
                      ></label>
                    </div>
                    {/* -------------------------------------------------------------- */}
                  </div>
                </label>
              </div>
            ))}
          </div>
          <label
            htmlFor="check1"
            className="open-label1 w-full rounded-sm bg-blue-300 py-2 text-center hover:cursor-pointer"
          ></label>
        </>
      ) : (
        <div className="open-content1 relative flex h-[120px] flex-col overflow-hidden">
          <p className="flex text-3xl">No Transcript</p>
        </div>
      )}
    </>
  );
};

export default TabsContentInner;
