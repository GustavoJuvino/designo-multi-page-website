import React from 'react'
import Image from "next/image";
import CardFooter from "./CardFooter";
import { Facebook, Instagram, Pinterest, Twitter, Youtube } from "../../../../public/assets/svgs";

interface FooterProps { "card": boolean }

const footerItems = [
  "our company",
  "locations",
  "contact"
]

const socialMedias = [
  "facebook",
  "instagram",
  "pinterest",
  "twitter",
  "youtube",
]

const Footer: React.FC<FooterProps> = ({ card }) => {
  return (
    <footer className="relative mt-[10rem]">
      {card && <CardFooter/> }
      
      <section className="
          w-full
          sm:h-[25rem]
          lg:mt-[12.5rem]
          sm:mt-[18.75rem]
          mt-[364px]
          bg-black
          flex
          justify-center
          items-center
          max-sm:text-center
        "
      >
        <section className="xl:w-[55%] w-[100%] max-xl:px-6">
          <div className="
              flex
              max-sm:flex-col
              items-center
              justify-between
              mt-[72px]
              pb-10
              sm:border-b-[1px]
              border-white
              border-opacity-10
            "
          >
            <div>
              <Image
                width={202}
                height={27}
                alt="Dark-Logo"
                src="/assets/logo-light.png"
                className="max-lg:w-[150px] max-sm:w-auto max-sm:mb-8"
              />
            </div>

            <hr className="sm:hidden w-full h-[1px] opacity-10"/>

            <ul className="
                sm:flex
                justify-between
                text-white
                tracking-[2px]
                sm:w-[370px]
                max-sm:mt-8
              "
            >
              {footerItems.map((item) => (
                <li className="
                    cursor-pointer
                    hover:border-b-[1px]
                    border-white
                    border-opacity-10
                    max-sm:mt-8
                  "
                >
                  {item.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>

          <div className="
              flex
              max-sm:flex-col
              max-sm:items-center
              justify-between 
              mt-8
            "
          >
            <div className="sm:flex justify-between sm:w-[440px]">
              <div className="text-white opacity-50 max-sm:mb-8">
                <h3>Designo Central Office</h3>
                <p>3886 Welligton Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>

              <div className="text-white opacity-50 mx-4 max-sm:mb-8">
                <h3>Contact Us (Central Office)</h3>
                <h3 className="max-sm:font-normal">
                  P : +1 253-863-8967
                </h3>
                <h3 className="max-sm:font-normal">
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