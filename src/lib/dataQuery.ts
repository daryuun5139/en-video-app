import { client } from "@/lib/client";
import { MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";

export type VideoType = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  url: string;
  videoTime: string;
  country: string;
  publishDate: string;
  overview: string;
  subtitle_origin: string;
};

// ビデオ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<VideoType>({
    customRequestInit: {
      // cache: "no-store",
    },
    endpoint: "videos",
    queries,
  });
  return {
    contents: listData.contents,
  };
};

// ビデオの詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<VideoType>({
    customRequestInit: {
      // cache: "no-store",
    },
    endpoint: "videos",
    contentId,
    queries,
  });
  return detailData;
};
