import Link from "next/link";
import Pill from "../../components/Pill";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col pt-4 space-y-10 bg-cream">
      <section className="flex flex-col space-y-4">
        <h1 className="sr-only">
          'Sup, I'm Theo, a web developer based out of Sydney, NSW.
        </h1>
        <Image src="/images/Header.png" alt="" width="946" height="819" />
      </section>
    </main>
  );
}
