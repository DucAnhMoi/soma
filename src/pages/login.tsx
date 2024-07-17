import Head from "next/head";
import Logo from "~/components/cus/logo";
import GoogleIcon from "~/components/icon/google";
import LoginSection from "~/components/sections/login_section";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login - Soma Portal</title>
      </Head>
      <LoginSection/>
    </div>
  );
}
