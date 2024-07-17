import Header from "~/components/sections/header_section";
import SideBarLeft from "~/components/sections/side_bar_left_section";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <SideBarLeft />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
}
