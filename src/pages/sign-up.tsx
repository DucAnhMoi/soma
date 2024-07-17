import Head from "next/head";
import SignUpSection from "~/components/sections/sign_up_section";

export default function SignUpPage() {
  return (
    <div>
      <Head>
        <title>Sign Up - Soma Portal</title>
      </Head>
      <SignUpSection/>
    </div>
  );
}
