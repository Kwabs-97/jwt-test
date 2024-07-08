import React from "react";
import Image from "next/image";
import steph from "@/app/assets/images/IMG_5351.PNG";
import LoginForm from "../components/loginForm";

function page() {
  return (
    <div className="container flex h-screen w-full flex-row items-center justify-between">
      <div className="flex-1">
        <LoginForm />
      </div>

      <aside className="flex flex-1 object-contain">
        <Image
          src={steph}
          alt="steph"
          width="600"
          height="500"
          className="w-max grow-2 rounded-lg"
          quality={100}
          priority={false}
        />
      </aside>
    </div>
  );
}

export default page;
