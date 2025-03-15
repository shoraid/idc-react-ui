"use client";

import { LoginFormData, loginSchema } from "./login.schema";
import Input from "@/components/forms/Input";
import Hint from "@/components/typography/Hint";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import Button from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/cards";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const BasicLoginWithValidation = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormData) {
    console.log(data);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 md:items-baseline md:pt-[7%] dark:bg-gray-950">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <span className="text-xl font-bold">Login</span>
          </CardHeader>
          <CardBody className="sm:px-8">
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <div className="space-y-6 pb-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email" size="sm">
                    Email
                  </Label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        autoComplete="email"
                        size="sm"
                        hasError={errors.email?.message != undefined}
                        {...field}
                      />
                    )}
                  />
                  <Hint size="sm" hasError={errors.email?.message != undefined}>
                    {errors.email?.message}
                  </Hint>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="password" size="sm">
                    Password
                  </Label>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="password"
                        placeholder="Your Password"
                        size="sm"
                        hasError={errors.password?.message != undefined}
                        {...field}
                      />
                    )}
                  />
                  <Hint
                    size="sm"
                    hasError={errors.password?.message != undefined}
                  >
                    {errors.password?.message}
                  </Hint>
                  <div className="text-right">
                    <Text
                      variant="link"
                      size="sm"
                      className="underline underline-offset-4"
                    >
                      Forgot Pasword?
                    </Text>
                  </div>
                </div>

                <Button color="primary" className="w-full">
                  Login
                </Button>

                <div className="text-center">
                  Don't have an account?{" "}
                  <Text
                    variant="link"
                    size="sm"
                    className="underline underline-offset-4"
                  >
                    Sign Up
                  </Text>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default BasicLoginWithValidation;
