"use client";

import React, { useState } from 'react';
import styles from "./styles/MobileMenu.module.css"
import { headerItems } from "./Header";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="sm:hidden">
      {/* Hamburger Menu */}
        <div className={styles.mobileButton}>
          <span
            id={styles.hamburger}
            className={active ? styles.active : ""}
            onClick={() => setActive(!active)}
          />
        </div>

      {/* Mobile Menu */}
      <ul className={active ? `
          sm:hidden
          absolute
          left-0 
          flex
          flex-col
          justify-between
          w-full
          h-60
          bg-black
          mt-8
          py-12
          pl-6
          z-[100]
        ` 
      : ""}
    >
      {active ? headerItems.map((item) => (
        <li  key={item} 
          className="
            text-2xl
            text-white
            w-max
            select-none
            cursor-pointer
            duration-300
            hover:text-gray-500
          "
        >
          {item.toUpperCase()}
        </li>
      )) : ""}
      </ul>

      {/* Background */}
      <div
        className={active ? `
          absolute
          bottom-0
          w-full
          h-[98%]
          bg-black
          opacity-50
          z-[90]
          left-0
        ` : ""}
      />
    </section>
  )
}

export default MobileMenu;