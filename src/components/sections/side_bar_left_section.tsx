import { FC } from "react";
import Logo2 from "../cus/logo2";
import HomeIcon from "../icon/side_bar_left/home";
import PortfolioIcon from "../icon/side_bar_left/portfolio";
import ResourcesIcon from "../icon/side_bar_left/resources";

interface MenuItem {
  text: string;
  link: string;
  icon: FC<Record<string, never>>;
}

const SideBarLeft: FC = () => {
  const menu: MenuItem[] = [
    { text: "Home", link: "/", icon: HomeIcon },
    { text: "Portfolio", link: "/portfolio", icon: PortfolioIcon },
    { text: "Resources", link: "/resources", icon: ResourcesIcon },
    // { text: "Network", link: "/network", icon: ResourcesIcon },
    // { text: "Feed", link: "/feed", icon: ResourcesIcon },
    { text: "Chatbot", link: "/chatbot", icon: ResourcesIcon },
    // { text: "Deals", link: "/deals", icon: ResourcesIcon },
    { text: "Admin", link: "/admin", icon: ResourcesIcon },
    // { text: "Stats", link: "/stats", icon: ResourcesIcon },
    // { text: "Scouts", link: "/scouts", icon: ResourcesIcon },
  ];
  return (
    <div className="hidden w-28 overflow-y-auto bg-violet-900 md:block fixed left-0 top-0 h-full z-20">
      <div className="flex w-full flex-col items-center py-6">
        <Logo2 />
        <div className="mt-6 w-full flex-1 space-y-1 px-2 opacity-100 transition-all">
          {menu.map((item => 
            <a
              className="group flex w-full flex-col items-center rounded-md py-3 text-xs font-medium text-violet-100 hover:bg-violet-800 hover:text-white"
              href={item.link}
            >
              <item.icon/>
              <span className="mt-2">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarLeft;
