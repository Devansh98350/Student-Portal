import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import mainlogo from "../../assests/home_page/mainlogo.jpg";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const about = [
  {
    name: "About IIT Academy Internship",
    href: " ",
  },
  {
    name: "Why IIT Academy Internship",
    href: " ",
  },
  {
    name: "MOU's Signed",
    href: " ",
  },
  {
    name: "Collaboration",
    href: " ",
  },
  {
    name: "Statistics",
    href: " ",
  },
  {
    name: "Gallery",
  },
];

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="flex max-w-9xl items-center justify-between p-1 lg:px-8 border-b-4 border-orange-500"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">IIT Academy</span>
            <img
              className="h-20 w-auto"
              src={mainlogo}
              alt="IIT Academy Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 h-30 w-30 font-bold inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 mr-4"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-12 mr-40">
          <Link
            to="/"
            className="text-lg font-semibold leading-6 text-gray-900 mt-1"
          >
            Home
          </Link>
          <Popover
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Popover.Button
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none"
              style={{ whiteSpace: "nowrap" }}
            >
              About Us
              {isHovered ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isHovered}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {about.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to="/internships"
            className="text-lg font-semibold leading-6 text-gray-900 mt-1"
          >
            Internships
          </Link>
          <Link
            to=" "
            className="text-lg font-semibold leading-6 text-gray-900 mt-1"
          >
            Training Programs
          </Link>
          <Link
            to=" "
            className="text-lg font-semibold leading-6 text-gray-900 mt-1"
          >
            Login
          </Link>
          <Link
            to=" "
            className="text-lg font-semibold leading-6 text-gray-900 mt-1"
          >
            Contact Us
          </Link>
        </Popover.Group>
      </nav>
    </header>
  );
}
