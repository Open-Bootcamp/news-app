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
      <section className="flex h-[4.8rem] w-full flex-row flex-wrap content-center gap-[4.68rem] bg-primary px-[1rem] dk:h-[6.3rem] dk:justify-center dk:gap-0">
        {/* Icono Menu Hamburger */}
        <div
          className="z-10 w-[1.35rem] cursor-pointer dk:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseMenu /> : <HamburgerMenu />}
        </div>
        <h1 className="z-10 font-lora text-[35px] font-bold text-white dk:text-[50px]">
          NewsApp
        </h1>
      </section>
      <nav
        className={`fixed bottom-0 top-0 flex w-[65%] items-center justify-center bg-primary duration-500 ease-out ${
          isOpen ? "left-0" : "left-[-100%]"
        } dk:relative dk:left-0 dk:w-full dk:bg-white dk:bg-none dk:px-4`}
      >
        <ul className="flex flex-col gap-8 dk:w-full dk:flex-row dk:justify-between ">
          {Links.map((link, i) => (
            <li
              key={i}
              onClick={() => setIsOpen(false)}
              className="flex justify-between text-white hover:border-r-[0.2rem] hover:border-white dk:border-none"
            >
              <NavLink to={link.link}>
                {({ isActive }) => (
                  <span
                    className={`dk:text-[22px] dk:font-bold ${
                      isActive ? "dk:text-primary" : "dk:text-secondary"
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
