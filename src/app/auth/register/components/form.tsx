"use client";

import { cn } from "@/libs/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card-custom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button-custom";
import { useRegister } from "../hooks/useRegister";
import Link from "next/link";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { register, handleSubmit, onSubmit, isSubmitting, errors } =
    useRegister();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="shadow-xl bg-white">
        <CardHeader>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription className="text-gray-600">
            Please register to login to your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {/* Name */}
            <div>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="text-right text-mainColor font-semibold">
              <a
                href="#"
                className="text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-mainColor border-none text-white hover:bg-mainColor"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Register"}
            </Button>

            <div className="mt-4 text-center text-sm">
              Have an account?{" "}
              <Link
                href={"/auth/login"}
                className="underline underline-offset-4 text-mainColor font-semibold border-none shadow-none"
              >
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
