import "./globals.css";

import { Kanit } from "next/font/google";
import { Climate_Crisis } from "next/font/google";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Only load the weights we actually use
  display: "swap", // Ensures text remains visible during font loading
  preload: true,
});

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-climate-crisis",
  display: "swap", // Ensures text remains visible during font loading
  preload: true,
});

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
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preload" as="image" href="/images/Header.png" />
        <link rel="preload" as="image" href="/images/HeaderDesktop.png" />
      </head>
      <body
        className={`${kanit.className} ${climateCrisis.variable} font-sans min-h-screen`}
      >
        <div className="flex flex-col min-h-screen bg-cream">
          <PageHeader />
          <main className="flex-1">{children}</main>
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
