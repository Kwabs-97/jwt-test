"use client";
import React, { useEffect } from "react";
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
import { userLogin } from "@/lib/api/http";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  function _showPassword() {
    setShowPassword(!showPassword);
  }

  const form = useForm();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  //states for server messages
  const [serverError, setServerError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setloginSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  //router to navigate programatically on successful login
  const router = useRouter();
  async function onSubmit(data) {
    console.log("form Data :", data);

    //get form data
    const loginData = {
      email: data.email,
      password: data.password,
    };

    //login handler
    try {
      const logUserIn = await userLogin(loginData);
      if (logUserIn.status === 200) {
        setloginSuccess(true);
        setSuccessMessage(logUserIn.data.message);

        router.push("/home");
      }
      console.log(logUserIn);
    } catch (error) {
      setServerError(true);
      setErrorMessage(error.response.data.message);
      console.log(error);
    }
  }

  //show toast on successful login
  const { toast } = useToast();
  useEffect(() => {
    if (loginSuccess) {
      toast({
        description: successMessage,
      });
    }
  }, [loginSuccess, successMessage, toast]);

  return (
    <div className="form-container flex w-full flex-col items-center justify-center gap-4">
      <header className="">
        <p>Welcome Stephanie Kumordzie</p>
        <p>Please sign in to continue</p>
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
          {/* <InputContainer className="flex-col gap-1">
            <Label>Username*</Label>
            <Input
              placeholder="Enter your username"
              name="username"
              validation={{
                required: {
                  value: true,
                  message: "Username is required",
                },
              }}
              register={register}
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </InputContainer> */}

          <InputContainer className="flex-col gap-1">
            <Label>Email*</Label>
            <Input
              placeholder="Enter your email"
              name="email"
              validation={{
                required: {
                  value: true,
                  message: "Email field cannot be empty",
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
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              name="password"
              validation={{
                required: {
                  value: true,
                  message: "Password field cannot be empty",
                },
              }}
              register={register}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className=""
                name="password"
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
          </InputContainer>
          {serverError && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
