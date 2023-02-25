import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import locationIcon from "../../assets/img/icon-location.svg";
import { Wrapper } from "./Map.styles";
import "leaflet/dist/leaflet.css";
import ResetCenterView from "../resetCenterView/ResetCenterView";

const Map = ({ lng, lat }) => {
  const LocationIcon = L.icon({
    iconUrl: locationIcon,
    iconRetinaUrl: locationIcon,
    popupAnchor: [0, 0],
    iconSize: [46, 56],
  });

  return (
    <Wrapper>
      {lat && (
        <MapContainer
          center={[lat, lng]}
          zoom={18}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%", zIndex: "-1" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} icon={LocationIcon} />
          <ResetCenterView lat={lat} lng={lng} />
        </MapContainer>
      )}
    </Wrapper>
  );
};

export default Map;
