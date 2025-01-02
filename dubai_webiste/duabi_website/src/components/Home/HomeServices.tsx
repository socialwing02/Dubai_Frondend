import img from "@/assets/image/blob-image.jpg";
import Image from "next/image";

export default function HomeServices() {
  return (
    <section className="flex gap-4 min-h-screen">
      <Image className="w-[300px] h-[300px]" src={img} alt="" />
      <Image className="w-[300px] h-[300px]" src={img} alt="" />
      <Image className="w-[300px] h-[300px] scale-[1.2]" src={img} alt="" />
      <Image className="w-[300px] h-[300px]" src={img} alt="" />
      <Image className="w-[300px] h-[300px]" src={img} alt="" />
    </section>
  );
}
