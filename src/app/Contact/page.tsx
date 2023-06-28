import React from 'react';
import Footer from "../components/Footer/Footer";
import ContactContainer from "./Contact-Container";
import Locations from "../components/Locations";

export const metadata = {title: "Contact"}

const Contact = () => {
  return (
    <section>
        <section className="flex justify-center">
            <section className="
                xl:w-[1111px]
                sm:w-[689px]
                w-full
                h-auto
                max-xl:sm:mx-6
              "
            >
              <ContactContainer />
              <Locations />
            </section>
        </section>
        
        <div>
          <Footer card={false} />
        </div>
    </section>
  )
}

export default Contact;