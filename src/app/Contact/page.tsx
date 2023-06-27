import React from 'react';
import Footer from "../components/Footer/Footer";
import ContactContainer from "./Contact-Container";

const Contact = () => {
  return (
    <section>
        <section className="flex justify-center">
            <section className="
                xl:w-[1111px]
                sm:w-[689px]
                w-full
                xl:h-[480px]
                sm:h-[711px]
                h-full
                max-xl:sm:mx-6
              "
            >
              <ContactContainer />
            </section>
        </section>
        <Footer card={false} />
    </section>
  )
}

export default Contact;