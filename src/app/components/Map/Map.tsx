"use client";

import React from 'react';
import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

interface MapProps {
  country: string;
  address: AdressProps[];
  contact: ContactProps[];
  reverse?: boolean;
  center: number[];
  zoom: number;
}

interface AdressProps {
  office: string;
  street: string;
  location: string;
}

interface ContactProps {
  phone: string;
  email: string;
}

const LocationContainer: React.FC<MapProps> = ({
  country,
  address,
  contact,
  reverse,
  center,
  zoom 
}) => {
  return (
    <div className={`
        flex
        justify-between
        max-xl:flex-col-reverse
        sm:gap-8
        xl:pb-8
        pb-10
        max-xl:sm:mb-[7.5rem]
        ${reverse && "xl:flex-row-reverse"}
      `}
    >
      <div className={`
          xl:w-[730px]
          w-full
          sm:h-[326px]
          h-[394px]
          sm:pl-[95px]
          bg-white-peach
          sm:rounded-2xl
          flex
          flex-col
          justify-center
          max-sm:text-center
          relative
          overflow-hidden
        `}  
      >
        <h1 className="text-4xl font-medium text-peach mb-6">
          {country}
        </h1>

        {/* Texts */}
        <div className="sm:flex justify-between sm:w-[453px]">
          {address.map((item) => (
            <div>
              <h3>{item.office}</h3>
              <p>{item.street}</p>
              <p>{item.location}</p>
            </div>
          ))}

          {contact.map((item) => (
            <div className="max-sm:mt-6">
              <h3>Contact</h3>
              <p>{`P : ${item.phone}`}</p>
              <p>{`M : ${item.email}`}</p>
            </div>
          ))}
          <Image 
            width={584}
            height={292}
            alt="Circle-Background"
            src="/assets/bg-pattern-two-circles.svg"
            className="absolute bottom-0 left-0 max-sm:hidden"
          />

          <Image 
            width={292}
            height={292}
            alt="Circle-Background-Mobile"
            src="/assets/bg-pattern-three-circles.svg"
            className="absolute left-0 top-0 w-auto h-auto sm:hidden"
          />
        </div>
      </div>

      <MapContainer 
          center={center as L.LatLngExpression}
          zoom={zoom}
          scrollWheelZoom={true}
          className="
              xl:w-[350px]
              w-full
              sm:h-[326px]
              h-[320px]
              sm:rounded-2xl
              z-10
            "
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
      </MapContainer>
    </div>
  )
}

export default LocationContainer;