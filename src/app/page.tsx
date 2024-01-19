import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-[1000px]">
      {/* Heading Area------------------------------------------------------------------ */}
      <div className="py-2">
        <h1 className="py-3 text-3xl font-bold">Watching Documentary Videos</h1>
        <p className="text-sm leading-7 text-muted-foreground">
          突然ですが、私はテレビを見るのが好きです。
          特にドキュメンタリーやニュースなどをぼーっと見るのが。
          <br />
          インタビューや映像から人々の暮らしや実情に触れられるのがいいんですよね。
          <br />
          こういったドキュメンタリーを英語で見れたら勉強になるなと、ふと思いました。
          <br />
          で、集めてみました。
          ビデオの内容だけでなく、映像からわかる人々の暮らし、文化の違いも楽しんでみてください。
          <br />
          時間も10分〜20分くらいのちょうどよい長さのものを選んでいます。
        </p>
      </div>
      {/* Main Content ------------------------------------------------------------------- */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        <Card className="cursor-pointer p-2 hover:opacity-75">
          <Link href={"/videodetail"}>
            <CardContent className="w-full p-0">
              <Image
                src="/sample_image.jpg"
                alt="sample_image"
                width={200}
                height={150}
                className="w-full rounded-sm"
              />
            </CardContent>
            <CardHeader className="px-0 pb-3 pt-2">
              <CardTitle className="text-base leading-5">
                Childcare is broken: is the UK failing its future?(The Guardian)
              </CardTitle>
              <CardDescription>
                イギリスで育児システムが崩壊しつつあるという実情を映したドキュメンタリー。日本と実情が似ていることに驚きました。
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex-col items-end p-0 text-xs">
              <p>映像元：イギリス</p>
              <p>追加日：2023年11月1日</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
