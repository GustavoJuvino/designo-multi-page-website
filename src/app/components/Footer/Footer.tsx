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
    <footer className={`
        w-full
        ${card ? "md:h-[612px]" : "h-auto"}
        xl:mt-[160px]
      `}    
    >
      
      {card && <CardFooter />}

      <section className="
          w-full
          xl:h-[393px]
          h-auto
          bg-black
          mt-[14rem]
          flex
          justify-center
        "
      >
        <div className="
            xl:w-[1111px]
            md:w-[690px]
            w-full
            md:h-[177px]
            xl:mt-[142px]
            mt-[200px]
            max-xl:mb-20
          "
        >
          <div className="
              flex
              max-md:flex-col
              max-md:items-center
              justify-between
            "
          >
            <Link href="/">
              <Image
                width={202}
                height={27}
                alt="Dark-Logo"
                src="/assets/logo-light.png"
                className="cursor-pointer"
              />
            </Link>

            <hr className="
                mobile:w-[327px]
                w-[80%]
                h-[1px]
                opacity-10
                mt-10
                md:hidden
              "
            />

            <ul className="
                md:w-[370px]
                flex
                max-md:flex-col
                max-md:text-center
                justify-between
                text-white
                tracking-[2px]
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

          <hr className="w-full h-[1px] opacity-10 mt-10 max-md:hidden"/>

          <div className="
              flex
              max-md:flex-col
              max-md:items-center
              max-md:text-center
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
    
              <div className="text-white opacity-50 md:mx-4 max-md:mb-8">
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
        </div>
      </section>
    </footer>
  )
}

export default Footer;