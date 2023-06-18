import React from 'react';
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer/Footer";
import Projects from "@/app/components/Projects";
import getData from "@/app/helper/getData";
import Cards from "@/app/components/Cards";

const designs = ["web-design", "app-design", "graphic-design"] as const;
type Design = (typeof designs)[number];

interface DataContainerProps {
  title: string;
  text: string;
}

interface DataCardsProps {
  title: string;
  text: string;
  src: string;
}

export default async function page({params} : {params: {project: string}}) {
  const {project} = params;

  // user-defined guard
  const isDesign = (value: any): value is Design => designs.includes(value);

  // Data Container
  const dataContainer: DataContainerProps = isDesign(project) && 
    await getData(`Data-Container/${project}-container`);

  // Data Cards
  const dataCards = isDesign(project) &&
    await getData(`Data-Cards/${project}-cards`);


  if(isDesign(project)) {
    return (
      <section>
        <section className="xl:mx-[165px] sm:mx-9">
          <Container
            design="web"
            title={dataContainer.title}
            text={dataContainer.text}
          />
      
          <div className="
              w-[100%]
              lg:mt-[160px]
              mt-[120px]
              lg:grid
              2xl:grid-cols-[5fr_5fr_1fr]
              lg:grid-cols-[8fr_1fr]
            "
          >
            {dataCards.map((data: DataCardsProps) => (
              <Cards 
                key={data.title}
                title={data.title}
                text={data.text}
                src={data.src}
              />
            ))}  
          </div>
        
          <div className="
              flex
              max-xl:flex-col
              justify-center
              mt-[160px]
            "
          >
            {designs.map((design) => (
              <Projects type={design === project ? null : design} />
            ))}
          </div>

        </section>
        <Footer card={true} />
      </section>
    )
  } else {
    return (
      <section>
        <h1>Page Not Founded</h1>
        <Footer card={false} />
      </section>
    )
  }
  
}
  