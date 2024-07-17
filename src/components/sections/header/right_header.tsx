import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FC } from "react";
import ContactIcon from "~/components/icon/header/contact";
import UserIcon from "~/components/icon/header/user";
import { Button } from "~/components/ui/button";

const RightHeader: FC = () => {
  return (
    <div className="flex items-center sm:space-x-3">
      <div className="relative hidden flex-shrink-0 text-gray-400 focus-within:text-gray-600 sm:block">
        <a
          href="https://bit.ly/somawhatsapp"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
          aria-label="whatsapp"
          style={{
            display: "inline-block",
            width: "32px",
            height: "32px",
            position: "relative",
            overflow: "hidden",
            verticalAlign: "middle",
          }}
        >
          <ContactIcon />
        </a>
      </div>
      <div className="relative flex-shrink-0" data-headlessui-state="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div 
              className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 p-0"
              id="headlessui-menu-button-:r1:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="sr-only">Open user menu</span>
              <UserIcon />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="absolute right-[-10px] z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100">
            <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">My profile</DropdownMenuItem>
            <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default RightHeader;
