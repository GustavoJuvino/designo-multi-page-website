import React from 'react'
import ContainerAbout from "./Container-About"
import Footer from "../components/Footer/Footer"

const page = () => {
  return (
    <section>
      <section className="w-full h-auto flex justify-center">
        <div className="xl:w-[1111px] w-[689px] h-auto max-md:sm:mx-6">
          <ContainerAbout 
            type={1}
            title="About Us"
            paragraph={`
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            `}
            src="image-about-hero"
          />

          <ContainerAbout 
            type={2}
            title="World-class talent"
            paragraph={`
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            `}
            paragraph2={`
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery.
              Clients have always been impressed with our high-quality
              outcomes that encapsulates their brand’s story and mission.
            `}
            src="image-world-class-talent"
            reverse={true}
          />
        </div>

      </section>
      <Footer card={true} />
    </section>
  )
}

export default page