// YourComponent.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data: React.FC = () => {
    const [data, setData] = useState<any[]>([]); // Adjust the type as per your data structure

    useEffect(() => {
        // Make a GET request to your server's endpoint to fetch data
        axios.get('../Data/server.ts')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Your Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{/* Render your data here */}</li>
                ))}
            </ul>
        </div>
    );
};

export default Data;
