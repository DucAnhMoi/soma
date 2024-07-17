import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Main from "~/components/sections/main_section";
import HomeLayout from "~/layouts/homelayout";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login?from=/").catch((error) => {
        console.error("Error while navigating:", error);
      });
    }
  }, [session, status, router]);

  return (
    <HomeLayout>
      <Main/>
    </HomeLayout>
  );
}
