import React, { useMemo, useRef, useState } from "react";
import { useAircrafts } from "../../Hooks/useAircrafts";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import AircraftDetails from "./Components/AircraftDetails/AircraftDetails";
// import SummaryInformation from "./Components/SummaryInformation/SummaryInformation";
// import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import './Home.css';
import heavy from '../../Assets/heavy16.svg';

const mapStyles = {
    width: '100%',
    height: '95%'
  };

const darkMode =  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8ec3b9"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1a3646"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#64779e"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#334e87"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6f9ba5"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3C7680"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#304a7d"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c6675"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#255763"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#b0d5ce"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3a4762"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0e1626"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#4e6d70"
        }
      ]
    }
  ];

  const SensorMarker = () => <div style={{cursor: 'pointer'}}>
    <svg version="1.1" viewBox="0 0 443.231 443.231" style={{height:'30px'}}>
	<path d="M381.051,231.153H62.18c0,60.741,63.418,110.635,144.436,116.169v35.91h-41.361l-20,60h152.721l-20-60h-41.361v-35.91
		C317.634,341.788,381.051,291.894,381.051,231.153z"/>
    <path d="M327.183,113.632c-58.21-58.21-152.925-58.21-211.135,0l21.213,21.213c46.514-46.513,122.195-46.513,168.709,0
		L327.183,113.632z"/>
	<path d="M221.616,30c50.625,0,98.161,19.656,133.852,55.347l21.213-21.213C335.323,22.776,280.253,0,221.616,0
		S107.908,22.776,66.551,64.134l21.213,21.213C123.455,49.656,170.991,30,221.616,30z"/>
	<path d="M165.546,163.129l21.213,21.213c9.292-9.291,21.67-14.408,34.857-14.408s25.565,5.117,34.857,14.408l21.213-21.213
		c-14.958-14.958-34.87-23.195-56.07-23.195S180.503,148.171,165.546,163.129z"/>
        
</svg>
</div>

const Home = () => {
    const [show, setShow] = useState(false);
    const mapRef = useRef();
    const {aircrafts} = useAircrafts();
    const [position, setPosition] = useState({
        lat: 23.728783, 
        lng: 90.393791
    });

    console.log(aircrafts);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAhhveERkRFz2TIjA8akOSGIAC3bpsm5U8" // ,
        // ...otherOptions
      })

      function handleLoad(map) {
        mapRef.current = map;
      }

      function handleCenter() {
        if (!mapRef.current) return;
    
        const newPos = mapRef.current.getCenter().toJSON();
        setPosition(newPos);
      }

    console.log(aircrafts)

    const markers = useMemo(() => {
        return (
        aircrafts.map(item => <Marker 
            icon={{
                path: "M67.6,234.9h158l0.2,154.5l-61.5,45.3v21.2c0,2.3,0.3,6.4,2.2,7.9c1,0.8,4.1,2.3,12.8,0.6l76.3-21.9l77.3,22c8.1,1.6,11.2,0,12.2-0.7c1.9-1.5,2.2-5.6,2.2-7.9v-21.2l-60.7-44.6l0.9-155.2h156.9c24.9,0,45-20.2,45-45v0c0-24.9-20.2-45-45-45H288.3l0.1-23.2h0.2c-2-42.9-8.9-74.7-31.5-74.7c-22.5,0-29.7,31-31.9,73.8v0.9l0,23.2H67.6c-24.9,0-45,20.2-45,45v0C22.5,214.7,42.7,234.9,67.6,234.9z",
                // anchor: new google.maps.Point(17, 46),
                // scaledSize: new google.maps.Size(37, 37),
                // scaledSize: {width: 30, height: 60},
                fillColor: "yellow",
                fillOpacity: 0.8,
                scale: 0.05,
                strokeColor: 'black',
                strokeWeight: 2,
                anchor: { x: 250 , y: 200 },
                rotation: item.angle                         
            }}
            position={{lat: item.lat,  lng: item.lon}}
            onClick={() => setShow(true)}
            
        />)
        )
    }, [aircrafts])

    const map = useMemo(() => {
       return ( 
                    
        <GoogleMap
        mapContainerStyle={mapStyles}
        // center={{lat: 23.728783, lng: 90.393791}}
        onLoad={handleLoad}
        onDragEnd={handleCenter}
        center={position}
        zoom={7}
        options={{
            styles: darkMode,
            minZoom: 7, 
            maxZoom: 10,
            disableDefaultUI: true, 
            keyboardShortcuts: false,
            restriction: {
                latLngBounds: {north: 28.086135, south: 19.213329, west: 79.983760, east: 100.694048},
                strictBounds: false,
            },
        }}
        >
            {markers}
        </GoogleMap>     
                    
                )
    }, [ isLoaded, aircrafts, position])

    return (
        <>
            <Header></Header>
            {/* <div className="text-center flight-details">
                <button
                className="btn btn-primary"
                id="flight-details__button"
                onClick={() => setShow(true)}
                >
                Click On Aircrafts
                </button>
            </div> */}
            <div className="map-container">
                {isLoaded ?
                    map
                   : <h1>Loading</h1> }

            </div>
                

           

            <AircraftDetails show={show} onClose={() => setShow(false)} />

            {/* <SummaryInformation></SummaryInformation> */}
            <Footer></Footer>
        </>
    );
};

export default Home;
