import React, { useEffect } from "react";
import { Wrapper } from "./Map.styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import location from "../../assets/img/icon-location.svg";
const Map = ({ lat, lng }) => {
  let position = [lat, lng];
  let LocationIcon = L.icon({
    iconUrl: location,
    iconRetinalUrl: location,
    popupAnchor: [0, 0],
    iconSize: [46, 56],
  });
  return (
    <Wrapper>
      {lat && (
        <MapContainer
          center={position}
          zoom={18}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%", zIndex: "-1" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={LocationIcon}></Marker>
        </MapContainer>
      )}
    </Wrapper>
  );
};

export default Map;
