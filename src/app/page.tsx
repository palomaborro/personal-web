import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/sara.jpeg"
        alt="A picture of Sara"
        width={958}
        height={1280}
      />
    </main>
  );
}
