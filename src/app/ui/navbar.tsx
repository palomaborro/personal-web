import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Resume", href: "resume" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Contact", href: "contact" },
  ];
  return (
    <div className="mr-20 flex items-center justify-center text-white space-x-4">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="text-xl font-bold text-blue-violet-200 bg-transparent hover:text-blue-violet-50  focus:text-blue-violet-50 cursor-pointer"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
