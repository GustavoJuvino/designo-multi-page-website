"use client";

import React, { useState } from 'react';
import styles from "./styles/MobileMenu.module.css"
import { headerItems } from "./Header";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <section>
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
          w-screen
          h-60
          bg-black
          mt-8
          py-12
          pl-6
          duration-500
        ` 
      : ""}
    >
      {active ? headerItems.map((item) => (
        <li className="
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
    </section>
  )
}

export default MobileMenu;