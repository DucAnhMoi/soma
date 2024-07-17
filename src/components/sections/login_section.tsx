import { ToastAction } from "@radix-ui/react-toast";
import Head from "next/head";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Logo from "~/components/cus/logo";
import GoogleIcon from "~/components/icon/google";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import FullScreenLoader from "../cus/loading";

type bodyLoginType = {
  email: string;
  password: string;
};

export default function LoginSection() {
  const [bodyLogin, setbodyLogin] = useState<bodyLoginType>({
    email: "",
    password: "",
  });

  const [msgbodyLogin, setMsgbodyLogin] = useState<bodyLoginType>({
    email: "",
    password: "",
  });

  const { data: session, status } = useSession();
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firstSubmit, setFirstSubmit] = useState<boolean>(true);
  const router = useRouter();
  const { from } = router.query;

  useEffect(() => {
    console.log(session)
    if (session && status === "authenticated") {
      router.push(from ? String(from) : "/").catch((error) => {
        console.error("Error while navigating:", error);
      });
    }
  }, [session, status, router, from]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setbodyLogin((prevbodyLogin) => {
      const updatedbodyLogin = {
        ...prevbodyLogin,
        [e.target.id]: e.target.value,
      };
      if (!firstSubmit) {
        validateForm(updatedbodyLogin);
      }
      return updatedbodyLogin;
    });
  };

  const validateForm = (formState = bodyLogin) => {
    const {email, password } = formState;
    let valid = true;
    const newMsgbodyLogin = {
      email: "",
      password: "",
    };

    if (!/\S+@\S+\.\S+/.test(email)) {
      newMsgbodyLogin.email = "Please enter a valid email.";
      valid = false;
    }

    if (!password) {
      newMsgbodyLogin.password = "Password is required.";
      valid = false;
    } else if (password.length < 8) {
      newMsgbodyLogin.password =
        "Password must be at least 8 characters long.";
      valid = false;
    }

    setMsgbodyLogin(newMsgbodyLogin);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFirstSubmit(false);
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: bodyLogin.email,
      password: bodyLogin.password,
    });
    setIsLoading(false);

    if (result?.error) {
      setMsgbodyLogin({
        ...msgbodyLogin,
        password: "Email or password is incorrect"
      });
    } 
    else{
      setFirstSubmit(true)
      setbodyLogin({
        email: "",
        password: "",
      })
      toast({
        variant: "default",
        title: "Success",
        description: "Login successfully !!! Go to home page in 3s",
      });
      // setTimeout(() => {
      //   router.push(from ? String(from) : "/").catch((error) => {
      //     console.error("Error while navigating:", error);
      //   });
      // },3000)
    }
  };

  return (
      <main className="flex min-h-full mt-[24px] flex-col bg-[#f9fafb] py-12 sm:px-6 lg:px-8">
        <FullScreenLoader loading={isLoading} />
        <Logo width="70px" height="48px" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
            Sign in to your account
        </h2>
        <div className="mt-[32px] sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="">
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </Label>
                <Input
                type="email"
                id="email"
                placeholder=""
                value={bodyLogin.email}
                onChange={handleChangeInput}
                className={`mt-1 block w-full rounded-md border-gray-300 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm ${msgbodyLogin.email && "!border-red-500 focus:!border-red-500 focus:!ring-red-500"}`}
              />
              <p className="text-sm font-medium text-red-500">
                {msgbodyLogin.email}
              </p>
              </div>
              <div className="">
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                type="password"
                id="password"
                placeholder=""
                value={bodyLogin.password}
                onChange={handleChangeInput}
                className={`mt-1 block w-full rounded-md border-gray-300 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm ${msgbodyLogin.password && "!border-red-500 focus:!border-red-500 focus:!ring-red-500"}`}
              />
              <p className="text-sm font-medium text-red-500">
                {msgbodyLogin.password}
              </p>
              </div>
              <div>
                <Button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Log in
                </Button>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="w-full">
                    <Button
                      type="button"
                      className="mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55"
                      onClick={() => signIn('google')}
                    >
                      <GoogleIcon/>
                      Google
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <p className="text-gray-500">
                    Don't have an account?{" "}
                    <span>
                      <a
                        className="text-indigo-600 hover:text-indigo-500"
                        href="/sign-up?from=/"
                      >
                        Sign Up
                      </a>
                    </span>
                  </p>
                </div>
                <div className="mt-4 text-sm">
                  <p className="text-gray-500">
                    Forgot Password?{" "}
                    <span>
                      <a
                        className="text-indigo-600 hover:text-indigo-500"
                        href="/forgot"
                      >
                        Reset it here
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
  );
}
