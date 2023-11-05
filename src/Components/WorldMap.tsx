import React, { useState, useImperativeHandle, Ref, forwardRef } from 'react';
import {MapContainer, GeoJSON, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import worldGeoJSON from '../custom.json';
import L from 'leaflet';
import image from "../cd_pirated.png"
import france from "../franceimage.jpeg"
import japan from "../Japanese-Style-Seasoned-Okra-Vegan.jpg"
import mexico from "../Easy-Red-Enchilada-Sauce-spoon.jpg"
import './WorldMap.css'
import {useMapContext} from "./MapContext";

interface CountryType {
    properties: {
        NAME: string;
        // Add other properties as needed
    };
    // Add other properties as needed
}

const pirateicon = L.icon({
    iconUrl: image,
    iconSize: [16, 16]
})

const FranceIcon = L.icon({
    iconUrl: france,
    iconSize: [32, 32]
})

const JapanIcon = L.icon({
    iconUrl: japan,
    iconSize: [32, 32]
})

const MexicoIcon = L.icon({
    iconUrl: mexico,
    iconSize: [32, 32]
})

interface MarkerData {
    lat: number;
    lng: number;
    title: string;
}

interface MapComponentProps {
    addMarker: (lat: number, lng: number, title: string) => void;
}

interface LayerType {
    bindPopup(content: string | HTMLElement | Function, options?: {}): this;
    on(eventType: string, handler: Function): this;
    setStyle(style: object): this;
    // Add other methods or properties as needed
}

function WorldMap() {
    const style = {
        fillColor: '#693a22',
        colors: '#000000',
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7,
    };


    // Function to add a marker to the map

    const onEachCountry = (country: CountryType, layer: LayerType) => {
        const countryName = country.properties.NAME;
        layer.bindPopup(countryName);
        layer.on('mouseover', (e: any) => {
            const targetLayer = e.target;
            targetLayer.setStyle({ fillOpacity: 1 });
        });
        layer.on('mouseout', (e: any) => {
            const targetLayer = e.target;
            targetLayer.setStyle({ fillOpacity: 0.7 });
        });
    };

    return (
        <div>
            <MapContainer center={[30, 0]} zoom={2} maxZoom={4} minZoom={1} style={{width: '88vw', height: '70vh'}}>
                <GeoJSON
                        //@ts-ignore
                        data={worldGeoJSON}
                        style={style}
                        onEachFeature={onEachCountry as any} />
                <Marker position={[46, 2]} icon={FranceIcon}></Marker>
                <Marker position={[36, 138]} icon={JapanIcon}></Marker>
                <Marker position={[23, -102]} icon={MexicoIcon}></Marker>
            </MapContainer>

        </div>
    );
}

export default WorldMap;
