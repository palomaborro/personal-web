import Link from "next/link";
import { raleway } from "./ui/fonts";
import "./ui/globals.css";
import Navbar from "./ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased bg-blue-violet-950`}>
        <div className="sticky top-0 py-6 flex justify-between items-center z-10 bg-blue-violet-950">
          <span className="flex flex-col ml-20">
            <Link
              key={"name"}
              href={"/"}
              className="text-2xl font-bold text-blue-violet-200"
            >
              Sara Herráiz Gil
            </Link>
            <Link
              key={"description"}
              href={"/"}
              className="text-sm text-blue-violet-200"
            >
              Systems Biology and Bioinformatics
            </Link>
          </span>
          <Navbar />
        </div>
        <div className="z-0">{children}</div>
        <footer className="text-white p-4 text-xs ml-20">
          Made with love by Paloma Borro Santos while probably thinking about
          drumming
        </footer>
      </body>
    </html>
  );
}
