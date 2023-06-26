import React from 'react';
import Footer from "../components/Footer/Footer";
import ContactContainer from "./Contact-Container";

const Contact = () => {
  return (
    <section>
        <section className="flex justify-center">
            <section className="w-[1111px] h-[480px]">
                <ContactContainer />
            </section>
        </section>
        <Footer card={false} />
    </section>
  )
}

export default Contact;