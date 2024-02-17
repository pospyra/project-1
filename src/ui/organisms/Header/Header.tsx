import Image from "next/image";
import Logo from "../../../assets/images/logo.png";
import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div >
      <header className="flex justify-between h-16 px-3.5 lg:px-85px md:px-[39px] sm:px-3.5">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={35} />
        </div>
        <nav className="sm:flex hidden items-end items-center justify-end gap-6">
          <a href="/" className={`${styles.link} subtitle-2`}>Main</a>
          <a href="/about" className={`${styles.link} subtitle-2`}>About</a>
          <a href="/get" className={`${styles.link} subtitle-2`}>Get in touch </a>
        </nav>
        <div className="sm:hidden flex items-end items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </div>
      </header>
      <div className="h-0.5 bg-greysilver w-full"></div>
    </div>
  );
};