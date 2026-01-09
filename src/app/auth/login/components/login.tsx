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
import { useLogin } from "../hooks/useLogin";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useLogin();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="shadow-xl bg-white">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-gray-600">
            Enter your username below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* Username */}
              <div>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
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
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-mainColor border-none text-white hover:bg-mainColor"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href={"/auth/register"}
                className="underline underline-offset-4 text-mainColor font-semibold border-none shadow-none"
              >
                Register
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
