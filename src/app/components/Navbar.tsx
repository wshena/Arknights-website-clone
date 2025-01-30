'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavbarLinks } from '../utils/const'
import { NavbarProps } from '../utils/interface'
import HamburgerButton from './button/HamburgerButton'
import { usePathname } from 'next/navigation'
import MutedButton from './button/MutedButton'

const Navbar = () => {
  const path = usePathname();
  
  return (
    <section className="z-50 fixed top-0 left-0 w-full" style={{
      backgroundImage: 'linear-gradient(0deg,transparent,rgba(0,0,0,.6),rgba(0,0,0,.8))'
    }}>
      <nav className='container py-[10px] lg:py-[20px] px-[20px] md:px-[30px] xl:px-0 2xl:py-[50px] flex items-center justify-between'>
        <Link href={'/'} >
          <Image src={'/logo.png'} alt='arknights-logo' width={100} height={50} className='w-[100px] h-[30px] xl:w-[120px] xl:h-[40px] 2xl:w-[300px] 2xl:h-[80px]'/>
        </Link>
        <div className="flex items-center gap-[20px]">
          <ul className="hidden md:flex items-center gap-[20px]">
            {NavbarLinks.map((nav:NavbarProps) => {
              return (
                <li key={nav.id}>
                  <Link href={nav.link} className={`uppercase text-[.9rem] 2xl:text-[2.5rem] hover:text-highlight transition-color duration-500 ease-in-out ${path === nav.link ? 'text-highlight' : 'text-white'}`}>{nav.label}</Link>
                </li>
              )
            })}
          </ul>
          <MutedButton />
        </div>  
        <button className='block md:hidden'>
          <HamburgerButton />
        </button>
      </nav>
    </section>
  )
}

export default Navbar