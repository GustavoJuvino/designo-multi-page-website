import React from 'react';
import Container from "../components/Container";
import Cards from "../components/Cards";

const cardsData = [
  {
    cardTitle: "express",
    cardText: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    cardTitle: "transfer",
    cardText: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    cardTitle: "photon",
    cardText: "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    cardTitle: "builder",
    cardText: "Connects users with local contractors based on their location",
  },
  {
    cardTitle: "blogr",
    cardText: "Blogr is a platform for creating an online blog or publication",
  },
  {
    cardTitle: "camp",
    cardText: "Get expert training in coding, data, design, and digital marketing",
  }
]

// xl:px-[165px]
// sm:px-9

const WebDesign = () => {
  return (
    <section className="xl:mx-[165px] sm:mx-9">
      <Container 
          design="web"
          title="Web Design"
          text="
            We build websites that serve as powerful marketing tools 
            and bring memorable brand experiences.
          "
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
        {cardsData.map((data) => (
          <Cards 
            key={data.cardTitle}
            title={data.cardTitle}
            text={data.cardText}
            imgSrc="web-design"
          />
        ))}  
      </div>
    </section>
  )
}

export default WebDesign;