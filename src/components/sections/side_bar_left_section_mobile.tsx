import { FC } from "react";
import Logo2 from "../cus/logo2";
import HomeIcon from "../icon/side_bar_left/home";
import PortfolioIcon from "../icon/side_bar_left/portfolio";
import ResourcesIcon from "../icon/side_bar_left/resources";
import CloseIcon from "../icon/side_bar_left/close";
import { DrawerClose } from "../ui/drawer";

interface MenuItem {
  text: string;
  link: string;
  icon: FC<Record<string, never>>;
}

const SideBarLeftMobile: FC = () => {
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
    <div className="fixed inset-0 z-40 flex">
      <div
        className="relative flex w-full max-w-xs flex-1 translate-x-0 flex-col bg-violet-800 pb-4 pt-5"
        id="headlessui-dialog-panel-:rm:"
        data-headlessui-state="open"
      >
        <div className="absolute right-0 top-1 -mr-14 p-1 opacity-100">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          >
            <DrawerClose>
              <CloseIcon/>
            </DrawerClose>
            <span className="sr-only">Close sidebar</span>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center px-4">
          <img className="h-8 w-auto" src="https://www.somaportal.com/gray-logo.svg" alt="Soma Capital" />
        </div>
        <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
          <nav className="flex h-full flex-col">
            <div className="space-y-1">
              {menu.map((item) => 
              <a
                className="group flex items-center rounded-md bg-violet-800 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
                href={item.link}
              >
                <item.icon/>
                <span className="ml-3">{item.text}</span>
              </a>
              )}
            </div>
          </nav>
        </div>
      </div>
      <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
    </div>
  );
};

export default SideBarLeftMobile;
