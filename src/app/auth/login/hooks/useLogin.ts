import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { LoginFormValues, loginSchema } from "../schema/login";
import { loginAccount } from "../service/login";
import { saveRefreshToken, saveToken } from "@/libs/auth";
import { saveUser } from "@/libs/user";
import { useRouter } from "next/navigation";

export function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    const res = await loginAccount(values);

    if (res) {
      saveToken(res?.access_token);
      saveRefreshToken(res?.refresh_token);
      saveUser(res?.email);
      toast.success("Login successful!");
      router.push("/dashboard");
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
