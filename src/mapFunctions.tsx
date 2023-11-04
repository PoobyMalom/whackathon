import { useState } from 'react';

interface MarkerData {
    lat: number;
    lng: number;
    title: string;
}

const useMapFunctions = () => {
    const [markers, setMarkers] = useState<MarkerData[]>([]);

    const addMarker = (lat: number, lng: number, title: string) => {
        const newMarker = { lat, lng, title };
        setMarkers([...markers, newMarker]);
    };

    return { addMarker, markers };
};

export default useMapFunctions;
