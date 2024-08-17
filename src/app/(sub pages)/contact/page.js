"use client"
import Image from "next/image";
import { Form } from "../../../components/contact/Form";

import bg from "../../../../public/background/contact-background.png";

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className=" -z-50 w-full fixed top-0 left-0 h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py- 0 space-y-8 ">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Summon the developer
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Together we could create amazing things. Use the form below to get
            in touch with me. Let’s create together.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
