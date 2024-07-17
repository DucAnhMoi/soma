import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { Toaster } from "~/components/ui/toaster";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Progress from "~/components/cus/progress_loading";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <SessionProvider session={session}>
      <div className={GeistSans.className}>
        <Head>
          <link
            rel="icon"
            href="https://www.somaportal.com/favicon.ico"
          />
          <title>Home - Soma Portal</title>
        </Head>
        <Component {...pageProps} />
        <Toaster />
        <Progress isAnimating={isAnimating} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
