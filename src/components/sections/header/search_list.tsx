import { FC } from "react";

const SearchList: FC = () => {
  return (
    <div
      className="absolute left-0 z-[100] mt-[64px] w-full transform rounded-lg bg-white shadow-2xl"
      id="headlessui-popover-panel-:rr:"
      tabIndex={-1}
      data-headlessui-state=""
    >
      <div className="flex max-h-[200px] w-full overflow-auto md:max-h-[300px] lg:max-h-[400px] xl:max-h-[500px]">
        <div className="flex w-full grow flex-col bg-white">
          <ul className="divide-y divide-gray-200">
            {/* <li className="relative cursor-pointer py-3 hover:bg-gray-200">
              <div className="px-4">
                <a
                  href="/person/cllpzh4dn0cp7s60i1p1jxykx"
                  className="flex justify-between gap-x-6"
                >
                  <span className="flex min-w-0 items-center gap-x-4">
                    <img
                      className="h-8 w-8 flex-none rounded-full bg-gray-50"
                      src="https://storage.googleapis.com/pulumi-public-bucket-soma-b541c34/52a5e910b76282550f1323f77659249a318e8b12/cllpzh4dn0cp7s60i1p1jxykx-pfp"
                      alt=""
                    />
                    <span className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        <a>
                          <span className="absolute inset-x-0 -top-px bottom-0"></span>
                          Yaa Aboagye-Atta
                        </a>
                      </p>
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-x-4">
                    <span className="hidden sm:flex sm:flex-col sm:items-end">
                      <p>
                        <span className="text-xs leading-6 text-gray-500">
                          Consultant
                        </span>
                        <span className="text-xs leading-5 text-gray-500">
                          {" "}
                          /{" "}
                        </span>
                        <span className="text-xs font-medium leading-6 text-gray-900">
                          Bain &amp; Company
                        </span>
                      </p>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </li> */}
            {/* <li className="relative cursor-pointer py-3 hover:bg-gray-200">
              <div className="px-4">
                <div className="flex justify-between gap-x-6">
                  <div className="flex min-w-0 items-center gap-x-4">
                    <img
                      className="h-8 w-8 flex-none rounded-full bg-gray-50"
                      src="https://storage.googleapis.com/pulumi-public-bucket-soma-78c41ee/881cd561d7dfdc3de8bb3f08a40b1fecd1295b99/Zaam-harmonic-logo"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        <div>
                          <span className="absolute inset-x-0 -top-px bottom-0"></span>
                          Zaam
                          <span className="text-sm leading-6 text-gray-600">
                            {" "}
                            (Portfolio)
                          </span>
                        </div>
                      </p>
                      <p className="mt-1 flex text-xs leading-5 text-gray-500">
                        <span className="relative truncate"></span>
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-x-4">
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <div className="flex space-x-4 sm:ml-4">
                        <span className="flex items-center justify-center truncate text-xs text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="mr-1 h-4 w-4 flex-shrink-0 text-violet-400"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          N/A
                        </span>
                        <span className="flex items-center justify-center truncate text-xs text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="mr-1 h-4 w-4 flex-shrink-0 text-violet-400"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M19 5.5a4.5 4.5 0 01-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 11-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 015.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 00-.11.494 3.01 3.01 0 001.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382zM4 17a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          B2B / SaaS
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
            {/* <li className="relative cursor-pointer py-3 hover:bg-gray-200">
              <div className="px-4">
                <div className="flex justify-between gap-x-6">
                  <div className="flex min-w-0 items-center gap-x-4">
                    <img
                      className="h-8 w-8 flex-none rounded-full bg-gray-50"
                      src="https://storage.googleapis.com/pulumi-public-bucket-soma-78c41ee/00b85949bcbef6239c8fe2211ef2972b5de4c516/Saarey-harmonic-logo"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        <div>
                          <span className="absolute inset-x-0 -top-px bottom-0"></span>
                          Saarey
                          <span className="text-sm leading-6 text-gray-600">
                            {" "}
                            (Prospect)
                          </span>
                        </div>
                      </p>
                      <p className="mt-1 flex text-xs leading-5 text-gray-500">
                        <span className="relative truncate"></span>
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-x-4">
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <div className="flex space-x-4 sm:ml-4">
                        <span className="flex items-center justify-center truncate text-xs text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="mr-1 h-4 w-4 flex-shrink-0 text-violet-400"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M19 5.5a4.5 4.5 0 01-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 11-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 015.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 00-.11.494 3.01 3.01 0 001.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382zM4 17a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Consumer
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
            {/* <li className="relative cursor-pointer py-3 hover:bg-gray-200">
              <div className="px-4">
                <a
                  href="/person/clulumb5700co72v4fjbh1igt"
                  className="flex justify-between gap-x-6"
                >
                  <div className="flex min-w-0 items-center gap-x-4">
                    <img
                      className="h-8 w-8 flex-none rounded-full bg-gray-50"
                      src="https://storage.googleapis.com/pulumi-public-bucket-soma-b541c34/91550d60dbc13c77c2ce0c2e331bf51554642287/clulumb5700co72v4fjbh1igt-pfp"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        <a>
                          <span className="absolute inset-x-0 -top-px bottom-0"></span>
                          Carlos Saavedra
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-x-4">
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p>
                        <span className="text-xs leading-6 text-gray-500">
                          Co-founder, COO
                        </span>
                        <span className="text-xs leading-5 text-gray-500">
                          {" "}
                          /{" "}
                        </span>
                        <span className="text-xs font-medium leading-6 text-gray-900">
                          Makrwatch
                        </span>
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </li> */}
            <li className="relative cursor-pointer py-3 hover:bg-gray-200">
              <div className="px-4">
                <a
                  href="/person/clmano50e01z6s60ih7rgwvo8"
                  className="flex justify-between gap-x-6"
                >
                  <span className="flex min-w-0 items-center gap-x-4">
                    <img
                      className="h-8 w-8 flex-none rounded-full bg-gray-50"
                      src="https://storage.googleapis.com/pulumi-public-bucket-soma-b541c34/7550da6a7d9e9fb5d7d75696a529eb211661ac0d/clmano50e01z6s60ih7rgwvo8-pfp"
                      alt=""
                    />
                    <span className="min-w-0 flex-auto">
                      <span className="text-sm font-semibold leading-6 text-gray-900">
                        <span>
                          <span className="absolute inset-x-0 -top-px bottom-0"></span>
                          David Ricardo Saavedra
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-x-4">
                    <span className="hidden sm:flex sm:flex-col sm:items-end">
                      <span>
                        <span className="text-xs leading-6 text-gray-500">
                          CEO
                        </span>
                        <span className="text-xs leading-5 text-gray-500">
                          {" "}
                          /{" "}
                        </span>
                        <span className="text-xs font-medium leading-6 text-gray-900">
                          Hash Trust
                        </span>
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button className="group flex w-full items-center justify-center space-x-2 rounded-b-lg bg-violet-800 py-3 font-normal text-white transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-5 flex-shrink-0"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="truncate">See all results for 'aaa'</span>
      </button>
    </div>
  );
};

export default SearchList;
