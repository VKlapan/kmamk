"use client";
import { useRef, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Libraries } from "@react-google-maps/api";

const libraries: Libraries = ["places"];

const defaultMapOptions = {
  mapId: "7da6c5fc91c72632",
  mapTypeId: "roadmap",
  disableDefaultUI: false,
  zoomControl: true,
  minZoom: 1,
  scrollwheel: true,
  panControle: true,
  streetViewControl: false,
  fullscreenControl: false,
  mapTypeControl: false,
  rotateControl: false,
  scaleControl: true,
  gestureHandling: "greedy",
  styles: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#444444",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "all",
      stylers: [
        {
          saturation: "-8",
        },
        {
          lightness: "20",
        },
        {
          color: "#f4f3f0",
        },
      ],
    },
    {
      featureType: "landscape.man_made.building",
      elementType: "geometry.fill",
      stylers: [{ color: "#e3e3e3" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "all",
      stylers: [
        {
          color: "#cfe6cd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.attraction",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.attraction",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ff0000",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.attraction",
      elementType: "labels.icon",
      stylers: [
        {
          hue: "#ff0000",
        },
        {
          saturation: "28",
        },
        {
          lightness: "100",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          lightness: "52",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text",
      stylers: [
        {
          color: "#b9b6b6",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#abd8ea",
        },
        {
          visibility: "on",
        },
      ],
    },
  ],
  clickableIcons: false,
  keyboardControle: false,
  disableDoubleClickZoom: false,
};

const centerDefault = {
  lat: 39.96584602856107,
  lng: -82.9986200633545,
};

const Map = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY!;

  // loading Google Map core script
  const { isLoaded } = useJsApiLoader({
    mapIds: ["7da6c5fc91c72632"],
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries,
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = null;
  }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={11}
          center={centerDefault}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultMapOptions}
        ></GoogleMap>
      ) : (
        <div>LOADING....</div>
      )}
    </>
  );
};

export default Map;
