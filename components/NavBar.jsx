import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { getCategories } from '../services';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const goToHome = () => {
    document
      .getElementById("home")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const goToAbout = () => {
    document.getElementById("about_us").scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const goToHistory = () => {
    document.getElementById("our_history").scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const goToPrivate = () => {
    document
      .getElementById("private_dining")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const goToBeachCafe = () => {
    document
      .getElementById("beach_shack")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const goToContact = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="relative top-0 align-center">
      <nav className="bg-absolute lg:h-28 md:h-28 backdrop-blur" style={{backgroundImage: "url(https://www.itl.cat/pngfile/big/157-1572257_professional-website-background-images-hd-professional-emails-background.jpg)"}}>
        <div className="max-w-7xl px-6 md:px-0">
          <div
            className="flex items-center justify-between md:justify-center h-14 uppercase"
            style={{ fontWeight: 600 }}>
            <div className="flex items-center justify-between w-11/12 flex-wrap">
              <div className="cursor-pointer text-4xl mx-0 flex-shrink-0 lg:mt-4 md:mt-6 blur-lg">
          <Link href="/">
                <img
                  height="100 px"
                  width="160 px"
                  src="/logo.png"
                  alt="Logo"
                />
          </Link>
              </div>
              <div className="flex items-center text-xs lg:text-sm">
              <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
              </div>
              <Link href="/SearchGleanAssist">
                <img
                  className="cursor-pointer"
                  height="20 px"
                  width="30 px"
                  src="/search2.gif"
                  alt="Logo"
                />
          </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
