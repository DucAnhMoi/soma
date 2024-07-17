import Head from "next/head";
import Logo from "~/components/cus/logo";
import GoogleIcon from "~/components/icon/google";
import ForgotSection from "~/components/sections/forgot_section";

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Forgot Password - Soma Portal</title>
      </Head>
      <ForgotSection/>
    </div>
  );
}
