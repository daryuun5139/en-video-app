type Props = {};

const TopHeadingArea = (props: Props) => {
  return (
    <>
      <div className="py-2">
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
    </>
  );
};

export default TopHeadingArea;
