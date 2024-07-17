import { FC } from "react";
import SearchList from "./search_list";

const Search: FC = () => {
  return (
    <div className="flex flex-1">
      <div className="flex w-full md:ml-0">
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div className="flex h-full w-full items-center">
            <div className="flex w-full">
              <form
                id="search-bar"
                role="search"
                className="relative flex w-full items-center justify-center p-3 pl-0"
              >
                <input
                  type="search"
                  autoComplete="off"
                  autoCorrect="off"
                  id="search"
                  className="search-cancel:appearance-none flex w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-3 placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Search for people and companies across the entire Soma network"
                  value=""
                />
              </form>
              {/* <SearchList/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
