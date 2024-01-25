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
        <div className="py-6 flex justify-between items-center">
          <span className="">
            <p className="text-2xl font-bold text-blue-violet-200">
              Sara Herráiz Gil
            </p>
            <p className="text-sm text-blue-violet-200">
              Systems Biology and Bioinformatics
            </p>
          </span>
          <Navbar />
        </div>
        {children}
        <footer className="text-white">
          Made with love by Paloma Borro Santos while probably thinking about
          drumming
        </footer>
      </body>
    </html>
  );
}
