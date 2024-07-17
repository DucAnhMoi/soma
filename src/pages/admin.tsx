import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Main from "~/components/sections/main_section";
import HomeLayout from "~/layouts/homelayout";

export default function Admin() {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login?from=/admin").catch((error) => {
        console.error("Error while navigating:", error);
      });
    }
  }, [session, status, router]);

  return (
    <HomeLayout>
      <Head>
        <title>Admin - Soma Portal</title>
      </Head>
      <Main />
    </HomeLayout>
  );
}
