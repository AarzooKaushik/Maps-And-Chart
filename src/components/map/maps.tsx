import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useQuery } from "react-query";
import axios from "axios";
import { LatLngTuple } from "leaflet";

import 'leaflet/dist/leaflet.css';

interface CountryInfo {
  country: string;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
  };
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
}

const Maps: React.FC = () => {
  const { data: countriesData } = useQuery<CountryInfo[]>("countriesData", async () => {
    const response = await axios.get<CountryInfo[]>(
      "https://disease.sh/v3/covid-19/countries"
    );
    return response.data;
  });

 
  return (
    
    <div style={{ height: "90vh"}}>
     
      <MapContainer
        center={[20, 0] as LatLngTuple}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
        
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countriesData &&
           countriesData.map((country, index) => (
            <Marker
              key={index}
              position={[
                country.countryInfo.lat,
                country.countryInfo.long,
              ] as LatLngTuple}
           
            >
              <Popup>
                <div>
                  <h3>{country.country}</h3>
                  <p>Total Cases: {country.cases}</p>
                  <p>Active Cases: {country.active}</p>
                  <p>Recovered Cases: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
               
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
     
    </div>
   
  );
};

export default Maps;