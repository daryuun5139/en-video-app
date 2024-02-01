// Topページ

import TopContentsList from "@/components/topPage/TopContentsList";
import TopHeadingArea from "@/components/topPage/TopHeadingArea";

export default function Home() {
  return (
    <div>
      {/* Heading Area------------------------------------------------------------------ */}
      <TopHeadingArea />
      {/* Main Content ------------------------------------------------------------------- */}
      <TopContentsList />
    </div>
  );
}
