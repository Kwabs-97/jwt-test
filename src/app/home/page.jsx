"use client";
import React from "react";
import Header from "./components/header";
import { useState, useEffect } from "react";

function Page() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      setUserData(data);
    }
  }, []);

  return (
    <div className="mr-5 mt-6 flex w-full flex-col gap-2">
      <Header userData={userData} />
      <main className="flex h-full w-full items-center justify-center rounded-lg border-[1px] border-gray-300">
        <p>Nothing to show here yet... still under construction</p>
      </main>
    </div>
  );
}

export default Page;
