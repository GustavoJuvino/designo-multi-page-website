import React from 'react';
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const headerItems = [
    "Our company",
    "Locations",
    "Contact"
];

const Header = () => {
  return (
    <header className="
            w-full
            flex
            justify-center
            mobile:my-16
            my-8
            max-md:px-6
            max-small-mobile:px-2
        "
    >
        <div className="
                xl:w-[1111px]
                w-[689px]
                h-auto
                flex
                justify-between
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
            <ul className="
                    flex
                    justify-between
                    w-[370px]
                    md:text-bas
                    text-sm
                    text-black
                    max-sm:hidden
                "
            >
                {headerItems.map((item) => (
                    <li>
                        <Link 
                            href={item === "Our company" ? "/About" : item}
                            key={item}
                            className="
                                tracking-[2px]
                                max-sm:hidden
                                cursor-pointer
                                hover:underline
                            "
                        >
                            {item.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
            <MobileMenu />
        </div>
    </header>
  )
}

export default Header;