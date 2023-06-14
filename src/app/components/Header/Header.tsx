import Image from "next/image";
import React from 'react';
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export const headerItems = [
    "Our company",
    "Locations",
    "Contact"
];

const Header = () => {
  return (
    <header className="
            flex
            justify-between
            items-center
            mt-16
            xl:px-[165px]
            sm:px-9
            px-6
        "
    >
        <Link href="/">
            <Image 
                width={195}
                height={24}
                alt="Logo"
                src={"/assets/logo.png"}
                className="max-mobile:w-36 cursor-pointer"
            />
        </Link>
        <ul className="flex md:text-base text-sm text-black">
            {headerItems.map((item) => (
                <li 
                    key={item}
                    className="
                        lg:px-11
                        md:px-7
                        px-4
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