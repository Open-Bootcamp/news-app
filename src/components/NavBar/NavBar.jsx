import { useState } from 'react'
import { Links } from '../../models/index.js'
import { CloseMenu } from '../Icons/CloseMenu.jsx'
import { HamburgerMenu } from '../Icons/HamburgerMenu.jsx'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='w-full'>
      {/* Contenedor Menu */}
      <section className='flex w-full flex-row flex-wrap content-center gap-[6rem] bg-primary px-[1rem] py-[1.95rem]'>
        {/* Icono Menu Hamburger */}
        <div
          className='z-10 w-[1.6rem] cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseMenu /> : <HamburgerMenu />}
        </div>
        <h1 className='font-lora text-[44px] font-semibold'>
          NewsApp
        </h1>
        <nav className='fixed right-0 bottom-0 top-0 flex w-full items-center justify-center '>
          <ul className='flex flex-col gap-8'>
            {Links.map((link, i) => (
              <li key={i}>{link.name}</li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  )
}
