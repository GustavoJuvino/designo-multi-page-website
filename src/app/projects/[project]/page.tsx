import React from 'react';
import getData from "@/app/helper/getData";
import NotFounded from "@/app/not-found";
import Cards from "@/app/projects/[project]/Cards";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer/Footer";
import LeafBackground from "@/app/components/LeafBackground";
import ContainerDesign from "@/app/projects/[project]/Container-Design";

const designs = ["web-design", "app-design", "graphic-design"] as const;
type Design = (typeof designs)[number];

interface DataContainerProps {
  design: string;
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
        <div className="absolute top-[12rem] z-[-1] left-0">
          <LeafBackground />
        </div>

        <section className="w-full h-auto flex justify-center max-lg:sm:px-6">
          <section className="xl:w-[1111px] md:w-[689px] w-full">
            <ContainerDesign 
              design={dataContainer.design}
              title={dataContainer.title}
              text={dataContainer.text}
            />

            <div className="
                xl:mt-[160px]
                mt-[120px]
                grid
                gap-y-8
                max-sm:gap-y-10
                xl:grid-cols-3
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
        
          </section>
        </section>
        <div className="
                flex
                max-xl:flex-col
                max-xl:gap-6
                justify-center
                xl:mt-[160px]
                mt-[120px]
              "
            >
              {designs.map((design) => (
                <Projects key={design} type={design === project ? null : design} />
              ))}
            </div>

        <Footer card={true} />
      </section>
    )
  } else return <NotFounded />
}
  
