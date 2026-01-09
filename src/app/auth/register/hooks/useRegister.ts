import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { saveToken } from "@/libs/auth";
import { saveUser } from "@/libs/user";
import { useRouter } from "next/navigation";
import { RegisterFormValues, registerSchema } from "../schema/register";
import { createAccount } from "../service/register";

export function useRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const res = await createAccount(data);
      toast.success("Account created successfully!");

      if (res) {
        saveToken(res?.access_token);
        saveUser(res?.user.name);
        toast.success("Login successful!");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("Register failed, please try again!");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  };
}
