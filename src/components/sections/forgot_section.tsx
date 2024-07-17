import Head from "next/head";
import Logo from "~/components/cus/logo";
import GoogleIcon from "~/components/icon/google";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function ForgotSection() {
  return (
      <main className="flex min-h-full mt-[24px] flex-col bg-[#f9fafb] py-12 sm:px-6 lg:px-8">
        <Logo width="70px" height="48px" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
        Forgot Password
        </h2>
        <div className="mt-[32px] sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
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
                  className="mt-1 block w-full rounded-md border-gray-300 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send reset email
                </Button>
              </div>

            </form>
          </div>
        </div>
      </main>
  );
}
