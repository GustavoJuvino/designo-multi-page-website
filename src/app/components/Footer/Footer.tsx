import React from 'react'
import Image from "next/image";
import CardFooter from "./CardFooter";

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
          h-[25rem]
          mt-[12.5rem]
          bg-black
          flex
          flex-col
          justify-center
          items-center
        "
      >
        <section className="w-[55%]">
          <div className="
              flex
              justify-between
              mt-[72px]
              pb-10
              border-b-[1px]
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
              />
            </div>

            <ul className="
                flex
                justify-between
                text-white
                tracking-[2px]
                w-[370px]
              "
            >
              {footerItems.map((item) => (
                <li className="
                    cursor-pointer
                    hover:border-b-[1px]
                    border-white
                    border-opacity-10
                  "
                >
                  {item.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between mt-8">
            <div className="grid grid-cols-2 gap-[100px]">
              <div className="text-white opacity-50">
                <h3>Designo Central Office</h3>
                <p>3886 Welligton Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>

              <div className="text-white opacity-50">
                <h3>Contact Us (Central Office)</h3>
                <h3>P : +1 253-863-8967</h3>
                <h3>M : contact@designo.co</h3>
              </div>
            </div>

            <ul className="flex justify-between w-[184px]">
                {socialMedias.map((item) => (
                  <li>
                    <Image 
                      width={24}
                      height={24}
                      alt={item}
                      src={`/assets/footer/icon-${item}.svg`}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </section>
    </footer>
  )
}

export default Footer;