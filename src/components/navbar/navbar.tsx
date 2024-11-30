import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/img/Screenshot 2022-08-20 at 6.31 1 (Traced).png";
import { RiSlashCommands2 } from "react-icons/ri";
import { BsFillMoonFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleMode = (mode : any) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
    document.documentElement.className = mode; // `html` tegiga className qo'shish
  };

  // Saqlangan temani yuklash
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.className = savedTheme;
  });

  return (
    <>
      <nav className="fixed z-50 items-center w-full  bg-white dark:bg-black">
        <div className="max-w-full flex flex-wrap items-center justify-around mx-auto p-4 md:px-[15rem]">
          <div className="flex items-center gap-4">
            <div className="self-center flex gap-2 text-2xl font-semibold whitespace-nowrap light:text-black  dark:text-white">
              <img width={30} src={logo} alt="Logo" />
              <h2>DOML</h2>
            </div>
            <ul className="items-center hidden xl:flex flex-col p-4 md:p-0 font-medium light:text-black dark:text-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row ">
              <li>
                <a
                  href="#"
                  className=" flex items-center gap-2 font-thin"
                  aria-current="page"
                >
                  Product <MdKeyboardArrowDown size={25} />
                </a>
              </li>
              <li>
                <a href="#" className=" font-thin">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className=" font-thin">
                  Enterprice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center gap-1 font-thin"
                  aria-current="page"
                >
                  Explore <MdKeyboardArrowDown size={25} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center gap-1 font-thin"
                  aria-current="page"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center gap-1 font-thin"
                  aria-current="page"
                >
                  Pricing <MdKeyboardArrowDown size={25} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md:order-2 ">
            <div className="text-2xl mr-2 mt-1">
              {theme === "dark" ? (
                <button onClick={() => toggleMode("light")}>
                  <LuSun />
                </button>
              ) : (
                <button onClick={() => toggleMode("dark")}>
                  <BsFillMoonFill />
                </button>
              )}
            </div>
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="xl:hidden text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden xl:block">
              <div className="absolute inset-y-0 end-0 me-1 flex items-center ps-3 pointer-events-none">
                <span className="sr-only">Search icon</span>
                <span>
                  <RiSlashCommands2
                    size={25}
                    className="text-gray-500 2xl:block hidden"
                  />
                </span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="w-[240px] 2xl:block hidden p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#272F43;] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-black dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <button className=" 2xl:block hidden  mx-5">
              Sign in
            </button>
            <button className=" 2xl:block hidden  border px-3 rounded-xl border-[gray]">
              Sign up
            </button>
            <GiHamburgerMenu className="light:text-black dark:text-white text-2xl mt-2 ms-2 block 2xl:hidden " />
          </div>
          <div
            className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 xl:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
