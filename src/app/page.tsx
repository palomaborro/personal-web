import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <p className="text-blue-violet-200">Hola</p>
      <Image
        src="/sara.jpeg"
        alt="A picture of Sara"
        width={200}
        height={400}
      />
    </main>
  );
}
