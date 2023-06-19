import React from 'react'
import Link from "next/link"
import Footer from "./components/Footer/Footer"

const NotFounded = () => {
  return (
    <section>
        <div className="            
            xl:px-[165px]
            sm:px-9
            px-6
            flex
            flex-col
            items-center
            justify-center
            mt-[165px]
        "
        >
        <h1 className="text-4xl">Page Not Founded {" :( "}</h1>
        <Link
            href="/"
            className="
            text-2xl
            mt-5
            hover:underline
            "
        >
            Click here to go back to the home page {" < "}
        </Link>
        </div>
        <div className="pt-[0.7rem]">
        <Footer card={false} />
        </div>
    </section>
  )
}

export default NotFounded;