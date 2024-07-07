import React from "react";
import Image from "next/image";
import SignupForm from "../components/signupForm";
import steph from "@/app/assets/images/IMG_5350.PNG";

function page() {
  return (
    <div className="container flex h-screen w-full flex-row items-center justify-between">
      <div className="flex-1">
        <SignupForm />
      </div>

      <aside className="flex flex-1 object-contain">
        <Image
          src={steph}
          alt="steph"
          width="600"
          height="500"
          className="grow-2 w-max rounded-lg"
          quality={100}
          priority={false}
        />
      </aside>
    </div>
  );
}

export default page;
