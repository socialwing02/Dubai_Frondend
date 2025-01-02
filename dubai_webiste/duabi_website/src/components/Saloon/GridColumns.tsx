import React from "react";
import Image from "next/image";
import grid1 from "@/assets/image/grid-1.jpg";
import grid2 from "@/assets/image/grid-2.jpg";
import grid3 from "@/assets/image/grid-3.webp";
import grid4 from "@/assets/image/grid-4.jpg";
import Button from "../ui/Button";

export default function GridColumns() {
  return (
    <div className="grid-columns">
      <div className="">
        <p className="text-[clamp(1.7rem,1.5vw,4rem)]">
          Therefore to our clients, we always offer a consultation first, to be
          able to establish what sort of previous experience they have had.
        </p>
        <Image
          src={grid2}
          alt=""
          className="w-[200px] h-[200px] rounded-full object-cover "
        />
      </div>
      <div>
        <h1 className="text-[clamp(1.5rem,1.9vw,3rem)] p-4 text-center">
          Curly hair is most beautiful
        </h1>
      </div>
      <div>
        <Image
          src={grid2}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="grid  gap-8 p-8">
        <p className="text-[clamp(1.7rem,1.5vw,4rem)]">
          Therefore to our clients, we always offer a consultation first, to be
          able to establish what sort of previous experience they have had.
        </p>
        <Image
          src={grid3}
          alt=""
          className="w-[200px] h-[200px] rounded-full object-cover justify-self-end"
        />
      </div>
      <div>
        <Image
          src={grid2}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-6 flex flex-col items-center gap-8">
        <h2 className="text-[clamp(2rem,1.5vw,4rem)] font-semibold text-center  ">
          Curly Hair Hydration Treatments
        </h2>

        <Button>Learn More</Button>
      </div>
    </div>
  );
}
