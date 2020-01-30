/*import React, { useEffect, useRef } from "react";
import "./Map.css";

const GOOGLE_MAP_API_KEY = "AIzaSyC8mv0ICHNZs-6vnS_i-JGbwzV4v90blLQ";

const mapCenter = {
  //Finsbury Park
  lat: 51.5712,
  lng: -0.1009
};

const myLocation = {
  // Founders and Coders
  lat: 51.5637,
  lng: -0.1077
};

const mapStyles = {
  width: "80%",
  height: "300px"
};

function GoogleMaps(props) {
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 15,
      center: {
        lat: mapCenter.lat,
        lng: mapCenter.lng
      }
    });

  const createMarker = () =>
    new window.google.maps.Marker({
      position: {
        lat: myLocation.lat,
        lng: myLocation.lng,
        title: "My Location"
      },
      map: googleMap.current
    });

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  });

  return <div id="google-map" ref={googleMapRef} style={mapStyles} />;
}

export default GoogleMaps;*/
