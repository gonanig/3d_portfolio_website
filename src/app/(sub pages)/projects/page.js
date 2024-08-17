"use client"
import { ProjectList } from "@/components/projects";
import Image from "next/image";

import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "../../data";

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className=" -z-50 w-full fixed top-0 left-0 h-full object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />
    </>
  );
}
