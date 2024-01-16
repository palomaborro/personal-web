import { montserrat } from "./ui/fonts";
import "./ui/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-waikawa-gray-800 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
