// pages/about.tsx

import { FC } from "react";
import Search from "./header/search";
import RightHeader from "./header/right_header";
import BarIcon from "../icon/header/bar";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import SideBarLeftMobile from "./side_bar_left_section_mobile";

const Header: FC = () => {
  return (
    <div className="fixed z-10 w-full md:pl-[112px]">
      <div className="relative flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
        <Drawer direction="left">
          <DrawerTrigger>
            <div
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 md:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <BarIcon />
            </div>
          </DrawerTrigger>
          <DrawerContent className="h-full w-[386px] rounded-none bg-transparent border-none">
            <SideBarLeftMobile/>
          </DrawerContent>
        </Drawer>
        <div className="flex flex-1 justify-between px-4 opacity-100 transition-all sm:px-6">
          <Search />
          <RightHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
