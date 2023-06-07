import React from 'react'
import Image from "next/image";
import CardFooter from "./CardFooter";

interface FooterProps { "card": boolean }

const Footer: React.FC<FooterProps> = ({ card }) => {
  return (
    <footer className="relative mt-[10rem]">
      {card && <CardFooter/> }
      
      <section className="
          w-[100%]
          h-[25rem]
          mt-[12.5rem]
          bg-black
          flex
        "
      >
        <div className="flex justify-between items-center pt-[144px]">
          <div>
            <Image
              width={202}
              height={27}
              alt="Dark-Logo"
              src="/assets/logo-light.png"
            />
          </div>
          <ul className="grid grid-cols-3 gap-4">
            <li>OUR COMPANY</li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <hr className="h-[1px] opacity-10" />

        {/* <div>
          <div>
            <div></div>
            <div></div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div> */}
      </section>
    </footer>
  )
}

export default Footer;