import React from "react";
import InputLoading from "./inputLoading";

function LoginLoading() {
  return (
    <div className="container flex h-screen w-full flex-row items-center justify-between">
      <div className="flex-1" id="login-form">
        <div className="form-container flex w-full flex-col items-center justify-center gap-4">
          <header id="header">
            <div></div>
            <div></div>
          </header>
          <main className="w-9/12">
            <div id="form" className="flex flex-col gap-4">
              <aside className="flex flex-col gap-4">
                <InputLoading />
              </aside>
            </div>
            <div id="input-container">
              <label></label>
              <InputLoading />
            </div>
            <div id="input-container">
              <label></label>
              <InputLoading />
            </div>
            <div id="input-container">
              <label></label>
              <InputLoading />
            </div>
          </main>
        </div>
      </div>
      <aside
        id="image-container"
        className="h-[500px] w-[600px] flex-1 rounded-lg"
      ></aside>
    </div>
  );
}

export default LoginLoading;
