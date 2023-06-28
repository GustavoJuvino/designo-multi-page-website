import React from 'react';
import Footer from "../components/Footer/Footer";
import Location from "../components/Map";

export const metadata = {title: "Locations"}

const LocationData = [
  {
    country: "Canada",
    adress: [
      {
        office: "Designo Central Office",
        street: "3886 Wellington Street",
        location: "Toronto, Ontario M9C 3J5"
      }
    ],
    contact: [
      {
        phone: "+1 253-863-8967",
        email: "contact@designo.co"
      }
    ],
    center: [43.700319533246905, -79.2515784000413],
    zoom: 15
  },
  {
    country: "Australia",
    reverse: true,
    adress: [
      {
        office: "Designo AU Office",
        street: "19 Balonne Street",
        location: "New South Wales 2443"
      }
    ],
    contact: [
      {
        phone: "(02) 6720 9092",
        email: "contact@designo.au"
      }
    ],
    center: [-33.109299323378, 151.6326088628339],
    zoom: 13
  },
  {
    country: "United Kingdom",
    adress: [
      {
        office: "Designo AU Office",
        street: "13  Colorado Way",
        location: "Rhyd-y-fro SA8 9GA"
      }
    ],
    contact: [
      {
        phone: "078 3115 1400",
        email: "contact@designo.uk"
      }
    ],
    center: [53.72958130262888, -1.3340701267404498],
    zoom: 13
  },
]

const Locations = () => {
  return (
    <main>
      <section className="w-full h-auto flex justify-center">
        <section className="
            xl:w-[1110px]
            w-[689px]
            h-auto
            flex
            flex-col
            max-xl:sm:mx-10
            max-xl:sm:gap-[117px]
            gap-10
          "
        >
          {LocationData.map((location) => (
            <Location 
              country={location.country}
              reverse={location.reverse}
              address={location.adress}
              contact={location.contact}
              center={location.center}
              zoom={location.zoom}
            />
          ))}
        </section>
      </section>
      <Footer card={true} />
    </main>
  )
}

export default Locations;