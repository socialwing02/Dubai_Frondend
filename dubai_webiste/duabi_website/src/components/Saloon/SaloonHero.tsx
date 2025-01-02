import React from "react";
import haircut from "@/assets/image/saloon-hero.webp";
import Image from "next/image";
import Button from "../ui/Button";

export default function SaloonHero() {
  return (
    <div className="flex justify-center  gap-16 py-[3rem] text-center">
      <div className="w-[min(500px,90vw)] py-[5rem] flex flex-col items-center gap-6">
        <h1 className="text-[clamp(3rem,4vw,5rem)]  font-bold">
          Luxury ​Curly Hair Salon
        </h1>
        <p className="text-[clamp(1.2rem,1vw,3rem)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum
          sint dolorum veritatis eum voluptate, a eius qui amet. Possimus
          deleniti et quo beatae saepe rem modi
        </p>

        <div className="justify-self-end pr-8">
          <Button>Get Started</Button>
        </div>
      </div>

      <Image
        src={haircut}
        alt="saloon"
        className=" w-[500px] h-[500px] object-cover rounded-xl"
      />
    </div>
  );
}
