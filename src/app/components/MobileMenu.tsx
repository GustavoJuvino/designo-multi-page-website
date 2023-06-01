"use client";

import React, { useState, useEffect } from 'react';
import styles from "./styles/MobileMenu.module.css"

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  let body;

  return (
    <section>
        <div className={styles.mobileButton}>
          <span
            id={styles.hamburger}
            className={active ? styles.active : ""}
            onClick={() => setActive(!active)}
          />
        </div>
    </section>
  )
}

export default MobileMenu;