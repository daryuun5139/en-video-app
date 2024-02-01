// 英語トランスクリプト部分

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsContentInner from "./TabsContentInner";

type Props = {
  subtitleList: subtitleData[];
};
type subtitleData = {
  index: number;
  time: string;
  seconds?: number | undefined;
  text: string;
};

const TranscriptContainer = ({ subtitleList }: Props) => {
  // TabごとのsubtitleListを生成する--------------------------------------
  const tiptapInitialContent01 = subtitleList
    .map((n) => {
      if (n["seconds"]! < 300) return n;
    })
    .filter(Boolean);

  const tiptapInitialContent02 = subtitleList
    .map((n) => {
      if (n["seconds"]! < 600 && n["seconds"]! >= 300) return n;
    })
    .filter(Boolean);

  const tiptapInitialContent03 = subtitleList
    .map((n) => {
      if (n["seconds"]! < 900 && n["seconds"]! >= 600) return n;
    })
    .filter(Boolean);

  const tiptapInitialContent04 = subtitleList
    .map((n) => {
      if (n["seconds"]! < 1200 && n["seconds"]! >= 900) return n;
    })
    .filter(Boolean);

  const tiptapInitialContent05 = subtitleList
    .map((n) => {
      if (n["seconds"]! < 1500 && n["seconds"]! >= 1200) return n;
    })
    .filter(Boolean);

  return (
    <>
      <h2 className="text-lg font-bold">TRANSCRIPT</h2>
      <p>Note: This is not a word-for-word transcript.</p>
      <Tabs defaultValue="0:00" className="mt-2 w-full rounded-sm border-2 px-2 pt-3">
        <TabsList>
          <TabsTrigger value="0:00">0:00~</TabsTrigger>
          <TabsTrigger value="5:00">5:00~</TabsTrigger>
          <TabsTrigger value="10:00">10:00~</TabsTrigger>
          <TabsTrigger value="15:00">15:00~</TabsTrigger>
          <TabsTrigger value="20:00">20:00~</TabsTrigger>
        </TabsList>
        <TabsContent value="0:00" className="flex flex-col items-center">
          <TabsContentInner tiptapInitialContentList={tiptapInitialContent01} />
        </TabsContent>
        <TabsContent value="5:00" className="flex flex-col items-center">
          <TabsContentInner tiptapInitialContentList={tiptapInitialContent02} />
        </TabsContent>
        <TabsContent value="10:00" className="flex flex-col items-center">
          <TabsContentInner tiptapInitialContentList={tiptapInitialContent03} />
        </TabsContent>
        <TabsContent value="15:00" className="flex flex-col items-center">
          <TabsContentInner tiptapInitialContentList={tiptapInitialContent04} />
        </TabsContent>
        <TabsContent value="20:00" className="flex flex-col items-center">
          <TabsContentInner tiptapInitialContentList={tiptapInitialContent05} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default TranscriptContainer;
