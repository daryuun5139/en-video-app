"use client";

import "../../style/tiptap.css";
import { BubbleMenu, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  UnderlineIcon,
  ItalicIcon,
  HighlighterIcon,
  PlusSquare,
  MinusSquare,
} from "lucide-react";

type Props = {
  time: string | undefined;
  text: string | undefined;
};

const TiptapEditor = ({ time, text }: Props) => {
  const initialContent = () => {
    if (time && text)
      return `<div className="relative overflow-hidden py-0">
            <input id="check2" type="checkbox" className="open-check2 hidden" />
            <div className="open-content2">
              <p className="px-1">${text}</p>
              <p></p>
            </div>
            <label
              htmlFor="check2"
              className="open-label2 absolute right-0 top-0 hover:cursor-pointer"
            ></label>
          </div>`;
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight.configure({ multicolor: true }),
      Placeholder.configure({
        placeholder: "ここにメモを入力",
      }),
    ],
    content: initialContent(),
    editorProps: {
      attributes: {
        class: "relative rounded-sm pl-2 pr-5 [&>*]:px-1 pb-1 ",
      },
    },
  });

  return (
    <>
      <div>
        {/* バブルメニュー ==================================================================*/}
        {editor && (
          <BubbleMenu
            className="flex gap-2 rounded-lg border-[1px] border-black bg-white px-3 py-1"
            tippyOptions={{ duration: 100 }}
            editor={editor}
          >
            {/* 太字ボタン */}
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "bg-slate-200" : ""}
            >
              <Bold className="h-5 w-5" />
            </button>
            <span>|</span>
            {/* イタリックボタン */}
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "bg-slate-200" : ""}
            >
              <ItalicIcon className="h-5 w-5" />
            </button>
            <span>|</span>
            {/* アンダーラインボタン */}
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "bg-slate-200" : ""}
            >
              <UnderlineIcon className="h-5 w-5" />
            </button>
            <span>|</span>
            {/* 背景色ボタン（オレンジ、緑、青、赤） */}
            <div className="flex gap-1">
              <button
                onClick={() => editor.chain().focus().toggleHighlight({ color: "#ffc078" }).run()}
                className={editor.isActive("highlight", { color: "#ffc078" }) ? "font-bold" : ""}
              >
                <HighlighterIcon className="h-5 w-5 bg-[#ffc078]" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHighlight({ color: "#8ce99a" }).run()}
                className={editor.isActive("highlight", { color: "#8ce99a" }) ? "font-bold" : ""}
              >
                <HighlighterIcon className="h-5 w-5 bg-[#8ce99a]" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHighlight({ color: "#74c0fc" }).run()}
                className={editor.isActive("highlight", { color: "#74c0fc" }) ? "font-bold" : ""}
              >
                <HighlighterIcon className="h-5 w-5 bg-[#74c0fc]" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHighlight({ color: "#ffa8a8" }).run()}
                className={editor.isActive("highlight", { color: "#ffa8a8" }) ? "font-bold" : ""}
              >
                <HighlighterIcon className="h-5 w-5 bg-[#ffa8a8]" />
              </button>
            </div>
          </BubbleMenu>
        )}
      </div>
      <div>
        {/* コンテント部分 */}
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default TiptapEditor;
