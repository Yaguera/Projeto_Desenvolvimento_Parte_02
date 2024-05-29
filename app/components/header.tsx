"use client"
import React, { useState } from 'react'
import Hamburguer from '../../public/hamburger (1).svg'
import Image from 'next/image';

export default function Header() {
    const  [isOpen, setIsOpen] = useState(false);
    const handleNav = () =>  setIsOpen(!isOpen);

    return (
        <header className='fixed w-full top-0 p-4 bg-[#FF7F11]'>
            <nav className='max-container flex justify-end w-full'>
            
            <div onClick={handleNav} className='hidden max-lg:block'>
                <Image src={Hamburguer} width={50} alt="menu hamburguer" className='fill-white'/>
            </div>
              

                <ul className='hidden lg:flex gap-4 text-white font-medium'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/cadastro">Cadastro</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <div className={isOpen ? 'fixed bg-[#FF7F11] z-30 h-full w-[85vw] top-0 -left-0 shadow-[rgba(0,0,15,0.1)_10px_0px_4px_0px] ease-in-out duration-700 transform translate-x-[0%]' : 'fixed md:hidden h-screen top-0 w-[60vw] bg-[#FF7F11] ease-in-out duration-500 transform -translate-x-[120%]'}>
                <div className='bg-[#151516] flex justify-between w-full'>
                    <a href="/#">

                    </a>
                    <button onClick={handleNav}><i className='fas fa-close text-white text-2xl mr-7'></i></button>
                </div>
                <ul className='flex flex-col gap-9 mt-9 m-auto w-4/5'>
                    <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-1'>About<i className='fas fa-caret-down'></i></li>
                    <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-1'>Sobre<i className='fas fa-caret-down'></i></li>
                    <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-1'>Contato<i className='fas fa-caret-down'></i></li>
                    <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-1'>Cadastro<i className='fas fa-caret-down'></i></li>
                    <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-1'>Login<i className='fas fa-caret-down'></i></li>
                    
                </ul>
            </div>
        </header>
    )
}
