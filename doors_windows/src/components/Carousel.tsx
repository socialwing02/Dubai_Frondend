"use client";

import { carosuelImage } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      handlePrev();
    }, 3000);
  }, []);

  function handleNext() {
    setCount((prev) => (prev + 1) % carosuelImage.length);
  }

  function handlePrev() {
    setCount((prev) => (prev === 0 ? carosuelImage.length - 1 : prev - 1));
  }

  return (
    <section className="overflow-hidden">
      <div className="h-screen">
        <Image
          src={carosuelImage[count]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button> */}
    </section>
  );
}
