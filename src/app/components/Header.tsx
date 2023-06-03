import Image from "next/image";
import React from 'react';
import MobileMenu from "./MobileMenu";

export const headerItems = [
    "Our company",
    "Locations",
    "Contact"
];

const Header = () => {
  return (
    <header className="
            flex
            sm:justify-between
            justify-between
            items-center
            mt-16
            px-[165px]
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