import Link from "next/link";

const PageHeader = () => {
  return (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <div className="flex flex-col space-y-6 items-center">
          <Link href="/">
            <h1 className="text-3xl text-white font-bold">Theo Harris</h1>
          </Link>
          <div className="flex flex-row space-x-2 items-center">
            <Link href="/" className="text-lg text-slate-300 hover:underline">
              Home
            </Link>
            <p className="text-slate-300">-</p>
            <Link
              href="/blog"
              className="text-lg text-slate-300 hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
