// コンテンツ個別ページ

import VideoPlayer from "@/components/videodetail/VideoPlayer";
import SubtitleBox from "@/components/videodetail/SubtitleBox";
import TranscriptContainer from "@/components/videodetail/TranscriptContainer";
import { VideoType, getDetail, getList } from "@/lib/dataQuery";
import convertSubtitle from "@/lib/convertSubtitle";
import Link from "next/link";

type paramsType = {
  id: string;
};

//generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams(): Promise<paramsType[]> {
  const { contents } = await getList();
  const paths = contents.map((post: VideoType) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

const VideoDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const { title, url, publishDate, subtitle_origin } = await getDetail(id);
  const subtitleData = convertSubtitle(subtitle_origin);

  return (
    <div className="mb-20 flex flex-col items-center">
      {/* Upper Content -----------------------------------------------*/}
      <div className="flex h-[600px] w-full flex-col">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="flex justify-between">
          <p className="text-sm">掲載日：{publishDate.slice(0, 10)}</p>
          <Link href="/" className="font-bold underline">
            Topにもどる
          </Link>
        </div>
        <VideoPlayer url={url} />
        <SubtitleBox subtitleList={subtitleData} />
      </div>
      {/* Lower Content ----------------------------------------------- */}
      <div className="flex w-full flex-col pt-12">
        <TranscriptContainer subtitleList={subtitleData} />
      </div>
    </div>
  );
};

export default VideoDetail;
