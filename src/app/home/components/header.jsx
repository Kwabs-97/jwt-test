import React from "react";

function Header({ userData }) {
  return (
    <header className="text-center text-xl font-bold">{`Hello and welcome ${
      userData ? userData.firstname : ""
    }`}</header>
  );
}

export default Header;
