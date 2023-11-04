import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MarkerData {
    lat: number;
    lng: number;
    title: string;
}

interface MapContextType {
    markers: MarkerData[];
    addMarker: (lat: number, lng: number, title: string) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const useMapContext = () => {
    const context = useContext(MapContext);
    if (!context) {
        throw new Error('useMapContext must be used within a MapProvider');
    }
    return context;
};

interface MapProviderProps {
    children: ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
    const [markers, setMarkers] = useState<MarkerData[]>([]);

    const addMarker = (lat: number, lng: number, title: string) => {
        const newMarker = { lat, lng, title };
        setMarkers([...markers, newMarker]);
    };

    return (
        <MapContext.Provider value={{ markers, addMarker }}>
            {children}
        </MapContext.Provider>
    );
};