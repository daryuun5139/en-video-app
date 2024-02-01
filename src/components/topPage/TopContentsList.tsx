import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoType, getList } from "@/lib/dataQuery";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const TopContentsList = async (props: Props) => {
  const { contents } = await getList();
  return (
    <>
      <div className="mb-20 mt-8 grid grid-cols-3 gap-8">
        {contents.map((post: VideoType) => {
          return (
            <Card className="cursor-pointer p-2 duration-500 hover:opacity-75" key={post.id}>
              <Link href={`/videodetail/${post.id}`}>
                <CardContent className="w-full p-0">
                  <Image
                    src={post.thumbnail.url}
                    alt="sample_image"
                    width={200}
                    height={150}
                    className="w-full rounded-sm"
                  />
                </CardContent>
                <CardHeader className="px-0 pb-3 pt-2">
                  <CardTitle className="text-base leading-5">{post.title}</CardTitle>
                  <CardDescription>{post.overview}</CardDescription>
                </CardHeader>
                <CardFooter className="flex-col items-end p-0 text-xs">
                  <p>映像元：{post.country}</p>
                  <p>追加日：{post.publishDate.slice(0, 10)}</p>
                </CardFooter>
              </Link>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default TopContentsList;
