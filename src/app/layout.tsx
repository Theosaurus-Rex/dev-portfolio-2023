import "./globals.css";

import { Kanit } from "next/font/google";
import { Climate_Crisis } from "next/font/google";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-climate-crisis",
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
