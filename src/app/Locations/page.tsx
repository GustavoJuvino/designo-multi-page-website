"use client";

import React from 'react';
import Footer from "../components/Footer/Footer";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const page= () => {
  return (
    <main>
        <section>
            <h1>Locations</h1>
            <MapContainer center={[43.700319533246905, -79.2515784000413]} zoom={15} scrollWheelZoom={true} className="w-[350px] h-[326px]">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
        </section>
        <Footer card={true} />
    </main>
  )
}

export default page