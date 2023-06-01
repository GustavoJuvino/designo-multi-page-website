import Image from "next/image";
import React from 'react';
import MobileMenu from "./MobileMenu";

const headerItems = [
    "Our company",
    "Locations",
    "Contact"
];

const Header = () => {
  return (
    <header className="
            flex
            sm:justify-around
            items-center
            mt-16
            max-lg:px-5
        "
    >
        <div>
            <Image 
                width={195}
                height={24}
                alt="Logo"
                src={"/assets/logo.png"}
            />
        </div>
        <ul className="flex md:text-base text-sm text-black">
            {headerItems.map((item) => (
                <li className="
                        lg:px-11
                        px-7
                        max-sm:hidden
                        cursor-pointer
                        hover:underline
                    "
                >
                    {item.toUpperCase()}
                </li>
            ))}
        </ul>

        <MobileMenu />
    </header>
  )
}

export default Header;