"use client";
import React from "react";
import Button from "./button";
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator";
import Input from "./input";
import InputContainer from "./inputContainer";
import Label from "./label";
import { useState } from "react";
import Link from "next/link";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  function _showPassword() {
    setShowPassword(!showPassword);
  }

  console.log(showPassword);
  return (
    <div className="form-container flex w-full flex-col items-center justify-center gap-4">
      <header className="">
        <p>Welcome Stephanie Kumordzie</p>
        <p>Please sign in to continue</p>
      </header>
      <main className="w-9/12">
        <form action="" className="flex flex-col gap-4">
          <aside className="flex flex-col gap-4">
            <Button className="hover:bg-gray-3 w-full hover:bg-gray-100">
              <FcGoogle />
              <p>Sign in with Google</p>
            </Button>
            <div
              id="separator"
              className="flex min-w-min flex-row items-center justify-center gap-5"
            >
              <Separator className="w-48" /> <span>OR</span>{" "}
              <Separator className="w-48" />
            </div>
          </aside>
          <InputContainer>
            <Label>Username*</Label>
            <Input placeholder="Enter your username" />
          </InputContainer>

          <InputContainer>
            <Label>Email*</Label>
            <Input placeholder="Enter your email" />
          </InputContainer>
          <InputContainer className="gap-2">
            <Label>Password*</Label>
            <Input
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
            />
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="px-4 py-2"
                name="show_password_checkbox"
                id="show_password_checkbox"
                onClick={_showPassword}
              />
              <label
                htmlFor="show_password_checkbox"
                className="text-sm font-normal"
              >
                Show password
              </label>
            </div>
            <p className="text-sm">Must be at least 8 characters</p>
          </InputContainer>
          <Button className="bg-burgendy font-bold leading-6 text-white hover:bg-rose-900">
            Sign in
          </Button>
        </form>
      </main>
      <footer>
        <p>
          New here? <Link href="/signup">click here to create an account</Link>
        </p>
      </footer>
    </div>
  );
}

export default LoginForm;
