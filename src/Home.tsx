import React from 'react';
import WorldMap from "./Components/WorldMap";
import './Home.css'
import './index.css';
//import OtherPage from './OtherPage'; // Import the component for the other page
import recipes from "./recipes.json"


import { Input, Divider, Image, Table, Button, Layout, Typography, Space} from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Search } = Input;

const { Header, Footer, Sider, Content } = Layout;

interface DataType {
    key: string;
    Cuisine: string;
    Recipe_name: string;
}


const columns: ColumnsType<DataType> = [
    {
        title: 'Cuisine',
        dataIndex: 'Cuisine',
        key: 'Cuisine',
    },
    {
        title: '',
        dataIndex: '',
        key: '',
    },
    {
        title: 'Recipe Name',
        dataIndex: 'Recipe_name',
        key: 'Recipe_name',
        render: (text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => <a>{text}</a>,

    },
];

const data: DataType[] = [
    {
        key: '1',
        Cuisine: 'French',
        Recipe_name: 'Herbs De Provence',
    },
    {
        key: '2',
        Cuisine: 'Japanese',
        Recipe_name: 'Simple Japanese-Style Okra',
    },
    {
        key: '3',
        Cuisine: 'Mexican',
        Recipe_name: 'Mexican Enchilada Sauce',
    },
];


const { Title } = Typography;
const containerStyle = {
    backgroundColor: '#6C809A', // Set your desired background color here
    padding: '20px', // Add some padding for better appearance
    textAlign: 'center',
};

const titleStyle = {
    color: '#ECEAE4', // Set the text color for the title
    lineHeight: 1,
    fontFamily: 'Bahnschrift', // Set the font to Bahnschrift

};

const buttonStyle = {
    backgroundColor: '#CB9108', // Set the background color for the button
    color: 'white', // Set the text color
};

const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center the content
    alignItems: 'center', // Vertically center the content
    marginBottom: '10px', // Add margin to separate from the titles
};

const dividerStyle = {
    height: '3px', // Adjust the height to make it thicker
    backgroundColor: '#CB9108', // Set a different background color
    width: '100px',
};

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
            <Space direction="vertical" size={10}>

                <div>
                    <Space direction="horizontal">
                        <Title style={titleStyle}>World Recipe Finder</Title>
                    </Space>
                    <br/>
                    <Space direction="horizontal" >
                        <Title style={titleStyle} level={3}>Connecting the world through food</Title>
                    </Space>
                    <br/>
                    <Space direction="horizontal" >
                        <Title style={titleStyle} level={5}>Toby Mallon -- Kenneth Xiong -- Alex Mineeva</Title>
                    </Space>
                    <br/>
                    <Space direction="horizontal" >
                        <Button type="primary" style={buttonStyle}>WHACK 2023</Button>
                    </Space>
                    <Space size={10} direction = "vertical">

                        <Divider style={dividerStyle} type="horizontal" />
                        <Search
                            placeholder="I want to make..." style={{ width: 200 }} />
                            <div className="WorldMap">
                                <WorldMap/>
                            </div>
                    </Space>
                </div>



                <Space size={200} direction = "vertical">

                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                    </Space>

                    <Table columns={columns} dataSource={data} />
                </Space>
                <Divider type="horizontal" />
                <h3> {recipes.recipes.france.name} </h3>
                <Divider type="vertical" />

            </Space>
        </div>
        //</>
        
    );
}

export default Home;