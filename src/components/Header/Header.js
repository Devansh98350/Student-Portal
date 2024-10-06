// import React, { useState, Fragment } from "react";
// import "@fortawesome/fontawesome-free/css/all.css";
// import mainlogo from "../../assests/home_page/mainlogo.jpg";
// import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
// const about = [
//   {
//     name: "About IIT Academy Internship",
//     href: "/pyq-jee-main",
//   },
//   {
//     name: "Why IIT Academy Internship",
//     href: "/pyq-jee-advanced",
//   },
//   {
//     name: "MOU's Signed",
//     href: "/pyq-neet",
//   },
//   {
//     name: "Collaboration",
//     href: "/pyq-cbse-boards",
//   },
//   {
//     name: "Statistics",
//     href: "/pyq-ntse",
//   },
//   {
//     name: "Gallery",
//   },
// ];
// const devtool = [
//   {
//     name: "Articles",
//     href: "/pyq-jee-main",
//   },
//   {
//     name: "Cheatsheet",
//     href: "/pyq-jee-advanced",
//   },
//   {
//     name: "Interview",
//     href: "/pyq-neet",
//   },
//   {
//     name: "Roadmaps",
//     href: "/roadmap",
//   },
// ];
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpen1, setIsOpen1] = useState(false);
//   return (
//     <header className="bg-white">
//       <nav
//         className=" flex max-w-9xl items-center justify-between p-1 lg:px-8 border-b-4 border-orange-500"
//         aria-label="Global"
//       >
//         <div className="flex lg:flex-1">
//           <a href="/" className="-m-1.5 p-1.5">
//             <span className="sr-only">IIT Academy</span>
//             <img className="h-20 w-auto" src={mainlogo} alt="" />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 h-30 w-30 font-bold inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 mr-4"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <Popover.Group className="hidden lg:flex lg:gap-x-12 mr-40">
//           <a
//             href="/"
//             className="text-lg font-semibold leading-6 text-gray-900 mt-1"
//           >
//             Home
//           </a>
//           {/*dkfhj*/}
//           <Popover className="relative">
//             <Popover.Button
//               className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               About Us
//               {isOpen ? (
//                 <ChevronUpIcon
//                   className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
//                   aria-hidden="true"
//                 />
//               ) : (
//                 <ChevronDownIcon
//                   className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
//                   aria-hidden="true"
//                 />
//               )}
//             </Popover.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                 <div className="p-2">
//                   {about.map((item) => (
//                     <div
//                       key={item.name}
//                       className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
//                     >
//                       <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
//                         <i
//                           className="fas fa-angle-double-right"
//                           style={{
//                             color: "#f39c12",
//                             fontSize: "larger",
//                             marginUp: "2px",
//                           }}
//                         ></i>
//                       </div>
//                       <div className="flex-auto">
//                         <a
//                           href={item.href}
//                           className="block font-semibold text-lg text-gray-900"
//                         >
//                           {item.name}
//                           <span className="absolute inset-0" />
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </Popover>
//           <a
//             href="/internships"
//             className="text-lg font-semibold leading-6 text-gray-900 mt-1"
//           >
//             Internships
//           </a>
//           <a
//             href="/apply-online"
//             className="text-lg font-semibold leading-6 text-gray-900 mt-1"
//           >
//             Apply Now
//           </a>
//           <Popover className="relative">
//             <Popover.Button
//               className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none"
//               onClick={() => setIsOpen1(!isOpen1)}
//             >
//               Developer Toolkit
//               {isOpen1 ? (
//                 <ChevronUpIcon
//                   className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
//                   aria-hidden="true"
//                 />
//               ) : (
//                 <ChevronDownIcon
//                   className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
//                   aria-hidden="true"
//                 />
//               )}
//             </Popover.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                 <div className="p-2">
//                   {devtool.map((item) => (
//                     <div
//                       key={item.name}
//                       className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
//                     >
//                       <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
//                         <i
//                           className="fas fa-angle-double-right"
//                           style={{
//                             color: "#f39c12",
//                             fontSize: "larger",
//                             marginUp: "2px",
//                           }}
//                         ></i>
//                       </div>
//                       <div className="flex-auto">
//                         <a
//                           href={item.href}
//                           className="block font-semibold text-lg text-gray-900"
//                         >
//                           {item.name}
//                           <span className="absolute inset-0" />
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </Popover>
//           <a
//             href="/login"
//             className="text-lg font-semibold leading-6 text-gray-900 mt-1"
//           >
//             Login
//           </a>
//           <a
//             href="/contact-us"
//             className="text-lg font-semibold leading-6 text-gray-900 mt-1"
//           >
//             Contact Us
//           </a>
//         </Popover.Group>
//       </nav>
//       <Dialog
//         as="div"
//         className="lg:hidden"
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//       >
//         <div className="fixed inset-0 z-10" />
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="/" className=" -m-2 p-0">
//               <span className="sr-only">IIT Academy</span>
//               <img className="h-20 w-auto" src={mainlogo} alt="" />
//             </a>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-900 text-20xl"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-8 w-8" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="-space-y-1 py-6">
//                 <a
//                   href="/"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-200"
//                 >
//                   Home
//                 </a>
//                 <Disclosure as="div" className="-mx-3">
//                   {({ open }) => (
//                     <>
//                       <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200">
//                         About Us
//                         <ChevronDownIcon
//                           className={classNames(
//                             open ? "rotate-180" : "",
//                             "h-7 w-7 flex-none"
//                           )}
//                           aria-hidden="true"
//                         />
//                       </Disclosure.Button>
//                       <Disclosure.Panel className="mt-2 space-y-2 border-2 border-orange-500">
//                         {[...about].map((item) => (
//                           <Disclosure.Button
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             className="block rounded-lg py-0 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-orange-200"
//                           >
//                             <i
//                               className="fas fa-angle-double-right"
//                               style={{
//                                 color: "#f39c12",
//                                 fontSize: "larger",
//                                 marginRight: "5px",
//                                 marginUp: "10px",
//                               }}
//                             ></i>
//                             {item.name}
//                           </Disclosure.Button>
//                         ))}
//                       </Disclosure.Panel>
//                     </>
//                   )}
//                 </Disclosure>
//                 <a
//                   href="/contact-us"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200"
//                 >
//                   Internships
//                 </a>
//                 <a
//                   href="/contact-us"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200"
//                 >
//                   Apply Now
//                 </a>
//                 <a
//                   href="/contact-us"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200"
//                 >
//                   Login
//                 </a>
//                 <a
//                   href="/contact-us"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </header>
//   );
// }
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1050);
    };

    // Initial check for window width
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div>
          {" "}
          <Sidebar />{" "}
        </div>
      ) : (
        <div>
          {" "}
          <Navbar />{" "}
        </div>
      )}
    </div>
  );
};

export default Header;
