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

const WebDesign = () => {
  return (
    <div>
      <Container 
          design="web"
          title="Web Design"
          text="
            We build websites that serve as powerful marketing tools 
            and bring memorable brand experiences.
          "
      />

      <section className="grid grid-cols-3">
        {cardsData.map((data) => (
          <Cards 
            title={data.cardTitle}
            text={data.cardText}
            imgSrc="web-design"
          />
        ))}
      </section>
    </div>
  )
}

export default WebDesign;