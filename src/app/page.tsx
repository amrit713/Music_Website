import Image from "next/image";

export default function Home() {
  return (
    <div className="  flex justify-center bg-green-100">
      <div className="absolute bottom-0 banner">
        <Image
          src="/banner.jpeg"
          alt="image"
          height={700}
          width={560}
          className="object-cover opacity-70  "
        />
      </div>
    </div>
  );
}
