import React, {forwardRef} from 'react';
import WorldMap from "./Components/WorldMap";
import './Home.css'
import {Marker} from "react-leaflet";
import useMapFunctions from "./mapFunctions";
import {MapProvider, useMapContext} from "./Components/MapContext";
function Home() {


    // Function to load data and add markers
    /*const loadData = () => {
        const { addMarker } = useMapContext()
        // Use the addMarker function from the MapContext
        addMarker(51.51, -0.09, 'Marker 1');
        addMarker(51.52, -0.1, 'Marker 2');
    }*/

        // Access the addMarker function

    return (
        //<><Header></Header>
        <div className="homepage" >
            <div className="WorldMap">
                <WorldMap/>

            </div>
            <h1>World Recipes Finder</h1>
            <p>Connecting the world via recipes | Whackathon 2023</p>
            <div className="rectangle" >     // i need to make text boxes for each part of the recipe section, text in each

            </div>
        </div>
        //</>
        
    );
}

export default Home;