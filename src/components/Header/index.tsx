import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";

import { Logout } from "../Buttons/Logout";
import { ThemeSwitch } from "../Buttons/ThemeSwitch";
import { Fragment, useContext, useState } from "react";
import { GhostButton } from "../Buttons/Ghost";
import { AuthContext } from "../../contexts/AuthContext";

interface IHamburguerProps {
  user?: {
    email?: string;
  }
}

function Hamburguer({ user: stories_user }: IHamburguerProps) {
  const { user, logout } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <GhostButton
        type="button"
        onClick={openModal}
      >
        <FaHamburger />
      </GhostButton>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white dark:bg-neutral-850 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-600 flex flex-row items-center"
                  >
                    {/* <Image className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src=""/> */}
                    <div className="mr-4 overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-neutral-700 dark:bg-opacity-50">
                      <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    {stories_user?.email ?? user?.email}
                  </Dialog.Title>
                  <div className="flex flex-col space-y-6 mt-6 items-end [&>button]:text-gray-600 [&>button]:font-medium [&>button]:text-lg">
                    <button className="hover:text-pink-500">Option 1</button>
                    <button className="hover:text-pink-500">Option 2</button>
                    <button className="hover:text-pink-500">Option 3</button>
                    <hr className="border-b border-t-0 flex w-full" />
                  </div>
                  <GhostButton onClick={logout} type="button">Logout</GhostButton>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


function Header() {
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
            <Logout className="max-lg:hidden" />
            <ThemeSwitch />
            <div className="hidden max-lg:flex space-x-4 items-center">
              <Hamburguer />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export { Hamburguer, type IHamburguerProps, Header };
