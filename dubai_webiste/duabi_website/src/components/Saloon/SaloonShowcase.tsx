import React from "react";
import showcase from "@/assets/image/showcase.jpg";
import Image from "next/image";
import Button from "../ui/Button";

export default function SaloonShowcase() {
  return (
    <section className="relative min-h-screen w-[min(900px,90vw)] py-16 my-10 mx-auto ">
      <Image
        src={showcase}
        alt="Showcase"
        className="rounded-lg object-cover w-full h-[500px]"
      />

      <div className="absolute top-[70%] left-[10%] transform -translate-x-1/2   -translate-y-1/2 w-[550px] h-[400px] bg-white rounded-lg shadow-lg p-8 border-2">
        <div className="grid gap-5">
          <h3 className="text-[clamp(1rem,1.1vw,3rem)] uppercase font-semibold">
            Curly Hair Salon
          </h3>

          <h1 className="text-[clamp(2rem,2.7vw,4rem)] font-bold">
            Book Your Appointment
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            delectus quia eveniet modi et magni iste, neque dolorum consectetur
            asperiores veritatis ab nulla reiciendis, obcaecati quibusdam sit
            qui expedita incidunt.
          </p>

          <Button>Book Now</Button>
        </div>
      </div>
    </section>
  );
}
