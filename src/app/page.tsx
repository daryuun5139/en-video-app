// Topページ

import VideoPlayer from "@/components/videodetail/VideoPlayer";
import SubtitleBox from "@/components/videodetail/SubtitleBox";
import TranscriptContainer from "@/components/videodetail/TranscriptContainer";
import convertSubtitle from "@/lib/convertSubtitle";
import { getDetail } from "@/lib/dataQuery";

const Home = async () => {
  const id = "oyxk-r3jev4j";
  const { title, url, publishDate, subtitle_origin } = await getDetail(id);
  const subtitleData = convertSubtitle(subtitle_origin);

  return (
    <div className="mb-20 flex flex-col items-center">
      {/* Upper Content -----------------------------------------------*/}
      <div className="flex h-[600px] w-full flex-col">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-sm">掲載日：{publishDate.slice(0, 10)}</p>
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

export default Home;
