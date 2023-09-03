import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between  lg:flex">
        <Link
          href="/blog"
          className="flex flex-row space-x-4 items-center text-2xl hover:underline"
        >
          Blog Posts<FiArrowRight className="ml-2"></FiArrowRight>
        </Link>
      </div>
    </main>
  );
}
