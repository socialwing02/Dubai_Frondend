import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-around items-center py-10 bg-blue-50">
      <div className="blob-shape"></div>

      <div className="w-[min(700px,90vw)]  flex flex-col gap-6">
        <h2 className="text-[clamp(2rem,2vw,3rem)] ">
          Experience Luxury, Style, Strength, and Adventure Hotels, Salons,
          Constructions, and Travels Redefined.
        </h2>

        <p className="text-[clamp(1.2rem,1.3vw,3rem)] text-pretty">
          Discover a world where your every need is met with excellence. From
          luxurious stays at our hotels that offer unmatched comfort, to stylish
          transformations at our premium salons, we ensure your journey is one
          of elegance and refinement. Our construction services stand as a
          testament to strength, innovation, and reliability, bringing your
          dream projects to life with precision and care.
        </p>
      </div>
    </div>
  );
}
