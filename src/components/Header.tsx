import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="mb-14">
      <Link href="/">
        <h1 className="border-b-[2px] py-3 text-5xl font-bold">Watching Documentary Videos</h1>
      </Link>
    </div>
  );
};

export default Header;
