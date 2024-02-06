import Image from "next/image";
import Logo from "../../../assets/logo.png";
import React from 'react';
import styles from './Header.module.css'; 

export const Header = () => {
  return (
    <header className="flex justify-between h-12">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={35} />
      </div>
      <nav className="items-end items-center flex justify-end gap-6">
        <a href="/" className={`${styles.link} subtitle-2`}>Main</a>
        <a href="/about" className={`${styles.link} subtitle-2`}>About</a>
        <a href="/get" className={`${styles.link} subtitle-2`}>Get in touch</a>
      </nav>
    </header>
  );
};