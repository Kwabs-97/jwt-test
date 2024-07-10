import React from "react";
import Image from "next/image";
import logo from "@/app/assets/images/13af781b-e4aa-4802-9a12-db271d456201.jpg";
import French1 from "@/app/assets/images/IMG_5848.jpg";
import NavLinks from "./navLinks";
import HomeIcon from "@/app/assets/icons/homeIcon";
import NotebookTabIcon from "@/app/assets/icons/notebook-icon";
import SettingsIcon from "@/app/assets/icons/settingsIcon";
import EllipsisIcon from "@/app/assets/icons/ellipsisIcon";

function Sidebar() {
  const navLinks = [
    {
      link: "home",
      icon: <HomeIcon />,
    },
    {
      link: "notes",
      icon: <NotebookTabIcon />,
    },
    {
      link: "settings",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <div className="flex h-dvh flex-col gap-5 p-5">
      <div id="logo" className="p-3">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={55}
          className="rounded-md"
        />
      </div>
      <div className="flex h-full flex-col justify-between">
        <div id="menu_container">
          <div id="menu" className="flex flex-col gap-0">
            <div id="title">
              <p>Menu</p>
            </div>
            {navLinks.map((navLink) => {
              return (
                <div
                  id="nav-links"
                  className="flex flex-row gap-3"
                  key={navLink.link}
                >
                  <div className="h-full w-3 rounded-r-md"></div>
                  <NavLinks href={navLink.link}>
                    {navLink.icon} <p>{navLink.link}</p>
                  </NavLinks>
                </div>
              );
            })}
          </div>
        </div>

        <div id="profile" className="flex flex-row items-center gap-2">
          <Image
            src={French1}
            alt="profile photo"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>Miss Kukuaa French</p>
          <EllipsisIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
