import Head from "next/head";
import { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "~/components/cus/logo";
import GoogleIcon from "~/components/icon/google";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { api } from "~/utils/api";
import FullScreenLoader from "../cus/loading";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { signIn, useSession } from "next-auth/react";

type bodySignUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
};

type msgErrorBodySignUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: string;
};

export default function SignUpSection() {
  const [bodySignUp, setBodySignUp] = useState<bodySignUpType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const [msgBodySignUp, setMsgBodySignUp] = useState<msgErrorBodySignUpType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: "",
  });

  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [firstSubmit, setFirstSubmit] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session, status } = useSession(); 
  const router = useRouter();
  const query = router.query;
  const [from, setFrom] = useState<string>(String(query.from));

  useEffect(() => {
    if (session && status === "authenticated") {
      router.push(from ? String(from) : "/").catch((error) => {
        console.error("Error while navigating:", error);
      });
    }
    setFrom(String(query.from))
  }, [session, status, router, from]);

  const registerMutation = api.auth.register.useMutation();

  const handleCheckboxChange = () => {
    setBodySignUp((prevBodySignUp) => {
      const updatedBodySignUp = {
        ...prevBodySignUp,
        checkbox: !prevBodySignUp.checkbox,
      };
      if (!firstSubmit) {
        validateForm(updatedBodySignUp);
      }
      return updatedBodySignUp;
    });
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBodySignUp((prevBodySignUp) => {
      const updatedBodySignUp = {
        ...prevBodySignUp,
        [e.target.id]: e.target.value,
      };
      if (!firstSubmit) {
        validateForm(updatedBodySignUp);
      }
      return updatedBodySignUp;
    });
  };

  const validateForm = (formState = bodySignUp) => {
    const { name, email, password, confirmPassword, checkbox } = formState;
    let valid = true;
    const newMsgBodySignUp = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: "",
    };

    if (!name) {
      newMsgBodySignUp.name = "Name is required.";
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newMsgBodySignUp.email = "Please enter a valid email.";
      valid = false;
    }

    if (!password) {
      newMsgBodySignUp.password = "Password is required.";
      valid = false;
    } else if (password.length < 8) {
      newMsgBodySignUp.password =
        "Password must be at least 8 characters long.";
      valid = false;
    }

    if (!confirmPassword) {
      newMsgBodySignUp.confirmPassword = "Confirm Password is required.";
      valid = false;
    } else if (confirmPassword !== password) {
      newMsgBodySignUp.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    if (!checkbox) {
      newMsgBodySignUp.checkbox = "Please accept the NDA";
      valid = false;
    }

    setMsgBodySignUp(newMsgBodySignUp);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFirstSubmit(false);
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const response = await registerMutation.mutateAsync({
      name: bodySignUp.name,
      email: bodySignUp.email,
      password: bodySignUp.password,
      confirmPassword: bodySignUp.confirmPassword,
    });
    setIsLoading(false);

    if (!response.metadata) {
      setMsgBodySignUp({
        ...msgBodySignUp,
        email: response.message,
      });
    }

    if (response.metadata) {
      setBodySignUp({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: false,
      })
      setFirstSubmit(true)
      toast({
        variant: "default",
        title: "Success",
        description: "Register successfully !!!",
        action: (
          <ToastAction
            onClick={() => {
              router.push(`/login?from=${from}`).catch((error) => {
                console.error("Error while navigating:", error);
              });
            }}
            altText="Go to the login page"
          >
            Go to the login page
          </ToastAction>
        ),
      });
    }
  };

  return (
    <main className="flex min-h-full flex-col justify-center bg-[#f9fafb] py-12 sm:px-6 lg:px-8">
      <FullScreenLoader loading={isLoading} />
      <Logo width="70px" height="48px" />
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
        Sign Up
      </h2>
      <div className="mt-[32px] sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="">
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder=""
                value={bodySignUp.name}
                onChange={handleChangeInput}
                className={`mt-1 block w-full rounded-md border-gray-300 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm ${msgBodySignUp.name && "!border-red-500 focus:!border-red-500 focus:!ring-red-500"}`}
              />
              <p className="text-sm font-medium text-red-500">
                {msgBodySignUp.name}
              </p>
            </div>
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
                value={bodySignUp.email}
                onChange={handleChangeInput}
                className={`mt-1 block w-full rounded-md border-gray-300 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm ${msgBodySignUp.email && "!border-red-500 focus:!border-red-500 focus:!ring-red-500"}`}
              />
              <p className="text-sm font-medium text-red-500">
                {msgBodySignUp.email}
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
                value={bodySignUp.password}
                onChange={handleChangeInput}
                className={`mt-1 block w-full rounded-md border-gray-300 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm ${msgBodySignUp.password && "!border-red-500 focus:!border-red-500 focus:!ring-red-500"}`}
              />
              <p className="text-sm font-medium text-red-500">
                {msgBodySignUp.password}
              </p>
            </div>
            <div className="">
              <Label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder=""
                value={bodySignUp.confirmPassword}
                onChange={handleChangeInput}
                className={`mt-1 block w-full rounded-md border-gray-300 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm ${msgBodySignUp.confirmPassword && "!border-red-500 focus:!border-red-500 focus:!ring-red-500"}`}
              />
              <p className="text-sm font-medium text-red-500">
                {msgBodySignUp.confirmPassword}
              </p>
            </div>
            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
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
                    onClick={() => signIn('google')}
                    className="mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55"
                  >
                    <GoogleIcon />
                    Google
                  </Button>
                </div>
              </div>
              <label
                htmlFor="acceptedNDA"
                className="mt-4 flex items-center text-sm font-medium text-gray-700"
              >
                <Checkbox
                  id="acceptedNDA"
                  name="acceptedNDA"
                  checked={bodySignUp.checkbox}
                  onCheckedChange={handleCheckboxChange}
                  // className="border-red-500 focus:border-red-500 focus:ring-red-500"
                  className={`mr-2 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm ${msgBodySignUp.checkbox && "!border-red-500 focus:!border-red-500 focus:!ring-red-500"}`}
                />
                I have read and agree to&nbsp;
                <a
                  href="https://storage.googleapis.com/soma-platform-prod/nda/nda.pdf"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  the NDA
                </a>
              </label>
              <p className="relative ml-6 block text-sm font-medium text-red-500">
                {msgBodySignUp.checkbox}
              </p>
              <div className="mt-4 text-sm">
                <p className="text-gray-500">
                  Already have an account?{" "}
                  <span>
                    <a
                      className="text-indigo-600 hover:text-indigo-500"
                      href="/login?from=/"
                    >
                      Login
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
