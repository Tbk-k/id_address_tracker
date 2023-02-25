import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

const ResetCenterView = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], map.getZoom(), {
        animate: true,
      });
    }
  }, [lat, lng, map]);
  return null;
};

export default ResetCenterView;
