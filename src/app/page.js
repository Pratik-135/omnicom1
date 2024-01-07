"use client";
// import Image from "next/image";

import Tab from "@/components/tab";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(0);
  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="font-semibold  text-4xl  text-center pb-2">
            Section Title
          </h1>

          <h2 className="font-semibold  text-2xl  text-center pb-2">
            Section Sub Title
          </h2>
        </div>
        <Tab />
      </div>
    </>
  );
}
