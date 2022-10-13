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
          className="absolute left-0 z-10 mx-4 w-[1.35rem] cursor-pointer dk:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseMenu /> : <HamburgerMenu />}
        </div>
        <h1 className="z-10 font-lora text-[35px] font-bold text-white dk:text-[50px]">
          NewsApp
        </h1>
      </section>
      <nav
        className={`fixed bottom-0 top-0 mx-auto flex w-[65%] max-w-screen-dk items-center justify-center bg-primary duration-500 ease-out ${
          isOpen ? "left-0" : "left-[-100%]"
        } dk:relative dk:left-0 dk:w-full dk:bg-white dk:bg-none dk:px-4`}
      >
        <ul className="flex w-[60%] flex-col gap-8 dk:w-full dk:flex-row dk:justify-between">
          {Links.map((link, i) => (
            <li key={i} onClick={() => setIsOpen(false)} className="">
              <NavLink to={link.link} className="flex justify-between">
                {({ isActive }) => (
                  <span
                    className={`w-full text-white dk:px-0 dk:text-[22px] dk:font-bold ${
                      isActive
                        ? "border-r-[0.2rem] border-white dk:border-none dk:text-primary"
                        : " dk:text-secondary"
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
      <div className="mx-auto w-full max-w-screen-dk px-4 md:mx-auto md:w-11/12">
        <Info />
      </div>
    </header>
  );
};
