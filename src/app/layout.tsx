import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Theo Harris",
  description: "Full Stack Developer from NSW, Australia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-4xl px-6">
          <PageHeader />
          {children}
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
