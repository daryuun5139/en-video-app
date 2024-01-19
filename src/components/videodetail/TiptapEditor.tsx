"use client";

import React from "react";
import "../../style/tiptap.css";
import { BubbleMenu, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import { Bold, UnderlineIcon, ItalicIcon, HighlighterIcon } from "lucide-react";

type Props = {
  content: JSX.Element;
};

const TiptapEditor = ({ content }: Props) => {
  const initialcontent = `<div><p className="${content.props.className}">${content.props.children}</p><p></p></div>`;

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight.configure({ multicolor: true }),
      Placeholder.configure({
        placeholder: "ここにメモを入力",
      }),
    ],
    content: initialcontent,
    editorProps: {
      attributes: {
        class:
          "relative rounded-sm p-2 [&>*]:px-1 [&>*]:py-2 before:absolute before:w-full before:bottom-[-10px] before:left-0 before:border-[1px] before:border-dashed before:border-slate-400",
      },
    },
  });

  return (
    <>
      <div>
        {/* バブルメニュー */}
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
