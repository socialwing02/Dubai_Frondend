import React from "react";
import showcase from "@/assets/image/showcase.jpg";
import Image from "next/image";

export default function SaloonShowcase() {
  return (
    <section className="relative min-h-screen w-[min(900px,90vw)] py-16 mx-auto">
      <Image
        src={showcase}
        alt="Showcase"
        className="rounded-lg object-cover w-full h-[500px]"
      />

      <div className="absolute top-[80%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-white rounded-lg shadow-lg p-4 border-2">
        <h1 className="text-2xl font-bold">Welcome to Our Salon</h1>
        <p className="text-gray-600 mt-4">
          Experience the best care for your hair with our expert professionals.
        </p>
      </div>
    </section>
  );
}
