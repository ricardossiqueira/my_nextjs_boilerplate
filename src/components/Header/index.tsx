import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";

import { Logout } from "../Buttons/Logout";
import { ThemeSwitch } from "../Buttons/ThemeSwitch";
import { Fragment } from "react";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-30 backdrop-blur-sm">
        <nav className="flex mx-auto max-w-7xl xl:px-8 items-center justify-between h-20 space-x-4 border-b-[1px]">
          <div className="flex items-center">logo</div>
          <div className="flex space-x-4 items-center">
            <ul className="max-lg:hidden">
              <li className="flex space-x-8 mr-4 [&>a]:font-medium [&>a]:text-gray-600 [&>a]:dark:text-gray-300">
                <Link href="#">Page A</Link>
                <Link href="#">Page B</Link>
                <Link href="#">Page C</Link>
              </li>
            </ul>
            <Logout />
            <ThemeSwitch />
            <div className="hidden max-lg:flex space-x-4 items-center">
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="p-4 rounded-md bg-transparent hover:bg-opacity-10 [&>svg]:fill-pink-500 hover:bg-pink-500 dark:hover:bg-opacity-10 dark:[&>svg]:fill-indigo-500 dark:hover:bg-indigo-500">
                  <FaHamburger />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Documentation
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
