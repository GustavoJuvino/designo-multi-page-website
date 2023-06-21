import React from 'react'
import Image from "next/image";
import Link from "next/link";
import CardFooter from "./CardFooter";
import { 
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Youtube 
} from "../../../../public/assets/svgs";

interface FooterProps { "card": boolean }

const footerItems = [
  "our company",
  "locations",
  "contact"
]

const Footer: React.FC<FooterProps> = ({ card }) => {
  return (
    <footer className="relative xl:mt-[10rem]">
      {card && <CardFooter/> }
      
      <section className="
          w-full
          md:h-[25rem]
          xl:mt-[12.5rem]
          md:mt-[18.75rem]
          bg-black
          flex
          justify-center
          items-center
          max-md:text-center
        "
      >
        <section className="xl:w-[55%] w-[100%] max-xl:px-6 mt-[10rem]" >
          <div className="
              flex
              max-md:flex-col
              items-center
              justify-between
              mt-[72px]
              pb-10
              md:border-b-[1px]
              border-white
              border-opacity-10
            "
          >
            <Link href="/">
              <Image
                width={202}
                height={27}
                alt="Dark-Logo"
                src="/assets/logo-light.png"
                className="max-lg:w-[150px] max-md:w-auto max-md:mb-8 cursor-pointer"
              />
            </Link>

            <hr className="md:hidden w-full h-[1px] opacity-10"/>

            <ul className="
                md:flex
                justify-between
                text-white
                tracking-[2px]
                md:w-[370px]
                max-md:mt-8
              "
            >
              {footerItems.map((item) => (
                <li
                  key={item} 
                  className="
                    cursor-pointer
                    hover:border-b-[1px]
                    border-white
                    border-opacity-10
                    max-md:mt-8
                  "
                >
                  {item.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>

          <div className="
              flex
              max-md:flex-col
              max-md:items-center
              justify-between 
              mt-8
            "
          >
            <div className="md:flex justify-between md:w-[440px]">
              <div className="text-white opacity-50 max-md:mb-8">
                <h3>Designo Central Office</h3>
                <p>3886 Welligton Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>

              <div className="text-white opacity-50 mx-4 max-md:mb-8">
                <h3>Contact Us (Central Office)</h3>
                <h3 className="max-md:font-normal">
                  P : +1 253-863-8967
                </h3>
                <h3 className="max-md:font-normal">
                  M : contact@designo.co
                </h3>
              </div>
            </div>

            <div className="
                flex
                justify-between
                w-[184px]
                max-sm:mb-16
              "
            >
                <Facebook id="social-media" />
                <Youtube id="social-media" />
                <Twitter id="social-media" />
                <Pinterest id="social-media" />
                <Instagram  id="social-media" />
            </div>
          </div>
        </section>
      </section>
    </footer>
  )
}

export default Footer;