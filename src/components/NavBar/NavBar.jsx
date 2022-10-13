import { useState } from "react";
import { Links } from "../../models/index.js";
import { CloseMenu } from "../Icons/CloseMenu.jsx";
import { HamburgerMenu } from "../Icons/HamburgerMenu.jsx";
import { NavLink } from "react-router-dom";
import Info from "../Info/Info.jsx";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex w-full flex-col gap-4">
      {/* Contenedor Menu */}
      <section className="relative flex h-[4.8rem] w-full items-center justify-center bg-primary px-[1rem] dk:h-[6.3rem] dk:justify-center">
        {/* Icono Menu Hamburger */}
        <div
          className="absolute left-0 z-10 mx-4 h-full w-[1.35rem] cursor-pointer dk:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseMenu /> : <HamburgerMenu />}
        </div>
        <div className="z-10 font-lora text-[35px] font-bold text-white dk:text-[50px]">
          NewsApp
        </div>
      </section>
      <nav
        className={`fixed bottom-0 top-0 flex w-[65%] items-center justify-center bg-primary/95 duration-500 ease-out ${
          isOpen ? "left-0" : "left-[-100%]"
        } dk:relative dk:left-0 dk:w-full dk:bg-white dk:bg-none dk:px-4`}
      >
        <ul className="flex flex-col gap-8 dk:w-full dk:flex-row dk:justify-between ">
          {Links.map((link, i) => (
            <li
              key={i}
              onClick={() => setIsOpen(false)}
              className="flex justify-between text-white"
            >
              <NavLink to={link.link}>
                {({ isActive }) => (
                  <span
                    className={`px-16 dk:px-0 dk:text-[22px] dk:font-bold ${
                      isActive
                        ? "border-r-[0.2rem] border-white dk:border-none dk:text-primary"
                        : "dk:text-secondary"
                    }`}
                  >
                    {link.name}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* Info Local */}
      <div className="w-full px-4">
        <Info />
      </div>
    </header>
  );
};
