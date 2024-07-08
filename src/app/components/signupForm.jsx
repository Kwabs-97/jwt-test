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
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
import { registerUser } from "@/lib/api/http";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  async function onSubmit(data) {
    const formData = {
      firstname: data.firstname, // Assuming data object has these properties
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await registerUser(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  function _showPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="form-container flex w-full flex-col items-center justify-center gap-4">
      <header className="">
        <p>Welcome Stephanie Kumordzie</p>
        <p>Please sign up to continue</p>
      </header>
      <main className="w-9/12">
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <aside className="flex flex-col gap-4">
            <Button className="hover:bg-gray-3 w-full hover:bg-gray-100">
              <FcGoogle />
              <p>Sign up with Google</p>
            </Button>
            <div
              id="separator"
              className="flex min-w-min flex-row items-center justify-center gap-5"
            >
              <Separator className="w-48" /> <span>OR</span>{" "}
              <Separator className="w-48" />
            </div>
          </aside>
          <InputContainer className="gap-3">
            <div>
              <Label>First name*</Label>
              <Input
                placeholder="Enter your first name"
                name="firstname"
                validation={{
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                }}
                register={register}
              />
              {errors.firstname && (
                <ErrorMessage>{errors.firstname.message}</ErrorMessage>
              )}
            </div>
            <div>
              <Label>Lastname*</Label>
              <Input
                placeholder="Enter your last name"
                name="lastname"
                validation={{
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                }}
                register={register}
              />
              {errors.lastname && (
                <ErrorMessage>{errors.lastname.message}</ErrorMessage>
              )}
            </div>
          </InputContainer>

          <InputContainer className="flex-col gap-1">
            <Label>Email*</Label>
            <Input
              placeholder="Enter your email"
              name="email"
              validation={{
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please enter a valid email",
                },
              }}
              register={register}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer className="flex-col gap-1">
            <Label>Password*</Label>
            <Input
              placeholder="create a password"
              type={showPassword ? "text" : "password"}
              name="password"
              validation={{
                required: {
                  value: true,
                  message: "Password is required",
                },
                // pattern: {
                //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                //   message: "Please enter a stronger password",
                // },
              }}
              register={register}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}

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
            <div>
              <p className="text-sm">Must be at least 8 characters</p>
            </div>
          </InputContainer>
          <Button className="bg-burgendy font-bold leading-6 text-white hover:bg-rose-900">
            create account
          </Button>
        </form>
      </main>
      <footer>
        <p>
          Already got an account?{" "}
          <Link href="/login"> click here to login</Link>
        </p>
      </footer>
    </div>
  );
}

export default SignupForm;
