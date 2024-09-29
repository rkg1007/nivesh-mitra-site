"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropDown from "./Dropdown";
import menuData from "@/data/menu-data";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    handleStickyMenu();
    window.addEventListener("scroll", handleStickyMenu);
  }, []);

  // hide navigation when clicked outside
  useEffect(() => {
    function handleClickOutside(event: any) {
      const navigationElement = document.querySelector(".navigation");
      if (
        navigationElement &&
        !navigationElement.contains(event.target) &&
        navigationOpen
      ) {
        setNavigationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navigationOpen]); // Added navigationOpen as a dependency

  return (
    <>
      <header
        className={` fixed left-0 top-0 z-9999 w-full bg-white py-7 transition-all duration-300 ease-in-out lg:py-0 ${
          stickyMenu && "!py-4 shadow lg:!py-0"
        }`}
      >
        <div className="navigation relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0 ">
          <div className="flex w-full items-center justify-between lg:w-3/12">
            <Link href="/">
              <p className="text-2xl text-black">Nivesh Mitra</p>
            </Link>

            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              className="block lg:hidden"
              onClick={() => {
                if (navigationOpen) {
                  setNavigationOpen(false);
                } else {
                  setNavigationOpen(true);
                }
              }}
              aria-label="mobile menu toggler"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-[0] duration-200 ease-in-out ${
                      !navigationOpen && "!w-full delay-300"
                    }`}
                  ></span>

                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-150 duration-200 ease-in-out ${
                      !navigationOpen && "delay-400 !w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-200 duration-200 ease-in-out ${
                      !navigationOpen && "!w-full delay-500"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-dark delay-300 duration-200 ease-in-out ${
                      !navigationOpen && "!h-0 delay-[0]"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-dark duration-200 ease-in-out ${
                      !navigationOpen && "dealy-200 !h-0"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={` invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-9/12 ${
              navigationOpen &&
              `shadow-lgrelative !visible mt-4 !h-auto max-h-[400px] overflow-y-scroll rounded-md bg-white p-7.5`
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                {menuData.map((menuItem, key) => (
                  <li
                    className={`group relative lg:py-6.5 ${
                      stickyMenu && "lg:!py-5.5"
                    }`}
                    key={key}
                  >
                    {menuItem.submenu ? (
                      <DropDown
                        menu={menuItem}
                        key={key}
                        setNavigationOpen={setNavigationOpen}
                      />
                    ) : (
                      <>
                        <Link
                          onClick={() => setNavigationOpen(false)}
                          href={menuItem.path ? menuItem.path : ""}
                          className="flex items-center justify-between gap-3 hover:text-dark"
                        >
                          {menuItem.title}
                        </Link>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* <!-- Main Nav End --> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
