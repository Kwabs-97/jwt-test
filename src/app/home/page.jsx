import React from "react";
import CircleUserIcon from "../assets/icons/circle-user";
import { CircleUser } from "lucide-react";
import NotebookTabIcon from "../assets/icons/notebook-icon";
import Header from "./components/header";

function page() {
  return (
    <div className="mr-5 mt-6 flex w-full flex-col gap-2">
      <Header />
      <main className="h-full w-full rounded-lg border-[1px] border-gray-300"></main>
    </div>
  );
}

export default page;
