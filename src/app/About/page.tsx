import React from 'react'
import ContainerAbout from "./Container-About"
import Locations from "../components/Locations"
import Footer from "../components/Footer/Footer"
import LeafBackground from "../components/LeafBackground"

const ContainerData = [
  {
    type: 1,
    title: "About Us",
    paragraph: `
      Founded in 2010, we are a creative agency that produces lasting
      results for our clients. We’ve partnered with many startups,
      corporations, and nonprofits alike to craft designs that make real
      impact. We’re always looking forward to creating brands, products,
      and digital experiences that connect with our clients’ audiences.
    `,
    src: "image-about-hero",
  },
  {
    type: 2,
    title: "World-class talent",
    reverse: true,
    paragraph: `
      We are a crew of strategists, problem-solvers, and technologists.
      Every design is thoughtfully crafted from concept to launch,
      ensuring success in its given market. We are constantly updating
      our skills in a myriad of platforms.  
    `,
    paragraph2: `
      Our team is multi-disciplinary and we are not merely interested in
      form — content and meaning are just as important. We give great
      importance to craftsmanship, service, and prompt delivery.
      Clients have always been impressed with our high-quality
      outcomes that encapsulates their brand’s story and mission.
    `,
    src: "image-world-class-talent"
  },
  {
    type: 2,
    title: "The real deal",
    paragraph: `
      As strategic partners in our clients’ businesses, we are ready to
      take on any challenge as our own. Solving real problems require
      empathy and collaboration, and we strive to bring a fresh
      perspective to every opportunity. We make design and
      technology more accessible and give you tools to measure
      success.
    `,
    paragraph2: `
      We are visual storytellers in appealing and captivating ways.
      By combining business and marketing strategies, we inspire
      audiences to take action and drive real results.
    `,
    src: "image-real-deal"
  },
]

const About = () => {
  return (
    <main>
      <section className="w-full h-auto flex justify-center">
        <div className="absolute top-[28rem] left-0 z-[-1]">
          <LeafBackground />
        </div>
        <div className="xl:w-[1111px] w-[689px] h-auto max-md:sm:mx-6">
          {ContainerData.slice(0, 2).map((data) => (
            <div className="xl:pb-[160px] sm:pb-[7.5rem] pb-0">
              <ContainerAbout
                type={data.type}
                title={data.title}
                reverse={data.reverse}
                paragraph={data.paragraph}
                paragraph2={data.paragraph2}
                src={data.src}
              />
            </div>
          ))}

          <section className="w-full relative">
            <div className="absolute right-[-40rem] top-[8rem] z-[-1] rotate-180">
              <LeafBackground />
            </div>
            <Locations />
          </section>

          <div>
            {ContainerData.slice(2).map((data) => (
              <div className="xl:mt-[160px] max-xl:my-[7.5rem]">
                <ContainerAbout
                  type={data.type}
                  title={data.title}
                  reverse={data.reverse}
                  paragraph={data.paragraph}
                  paragraph2={data.paragraph2}
                  src={data.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer card={true} />
    </main>
  )
}

export default About;