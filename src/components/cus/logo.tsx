import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  width: string;
  height: string;
}

const Logo: FC<Props> = ({ width, height }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <a
      onClick={async () => {
        try {
          if (session) {
            await router.push(`/?signin=true`);
          } else {
            await router.push(`/`);
          }
        } catch (error) {
          console.error("Failed to navigate:", error);
        }
        return null;
      }}
    >
      <img
        alt="Somacap Logo"
        loading="lazy"
        width="40"
        height="40"
        decoding="async"
        data-nimg="1"
        className="mx-auto h-12 w-auto"
        src="https://www.somaportal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoma.eff9361d.png&w=48&q=75"
        style={{ color: "transparent" }}
      ></img>
    </a>
  );
};

export default Logo;
