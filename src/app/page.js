"use client"
import Image from "next/image";
import { RenderModel } from "@/components/RenderModel";
import { Navigation } from "@/components/navigation";
import dynamic from "next/dynamic";
import bg from "../../public/background/home-background.png";

const Person = dynamic(() => import("@/components/models/Person"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        fill
        src={bg}
        alt="background-image"
        className=" -z-50 w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Person />
        </RenderModel>
      </div>
    </main>
  );
}
