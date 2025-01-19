import '../App.css';
import React, { useState, useEffect } from 'react';
import reportList from './getReportList';
import ItemDetailsAml from './ItemDetailsAml';
import KeyValueVisualizer from './ItemForm';
import SearchGrid from './SearchGrid';
import itemFormData from './ItemData';
import itemSearchGrifData from './searchGridData';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { ItemSearchData } from '../services/arasAmlService';

import steepgraph from './steepgraph.png';
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);


// Define styles here
const styles = {
    body: {
        background: '#f5f7fa',
        },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#bebfc1',
        borderBottom: '1px solid #ccc',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImage: {
        width: '40px',
        height: '40px',
        marginRight: '10px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    logoutButton: {
        padding: '10px 15px',
        backgroundColor: '#5c6bc0',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    typelist: {
        display: 'flex',
        justifyContent:'left'
    },
    dropdown: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '200px',
        cursor: 'pointer',
    },

};

function HomePage() {
    //item data
    const [ItemSampleData, setItemSampleData] = useState(null);
    const [itemtype, setItemtype] = useState('');
    const [isGridVisible, setIsGridVisible] = useState(false); // New state to control grid visibility
    //const [itemtypeList, setItemtypeList] = useState('');

    //const fetchData = async () => {
    //    try {
    //        debugger
    //        const d = await reportList(itemtype);
    //        setItemtypeList(d.value); // Set the fetched data to state
    //    } catch (error) {
    //        console.error("Error fetching data:", error);
    //    }
    //};
    //fetchData()
    // Array of item types (you can modify this list as needed or fetch it dynamically)
    const itemtypeList = [
        "Document",
        "Part",
        "Manufacturer Part",
        "Part BOM",
    ];
    const handleDivClick = (type) => {
        setItemtype(type);
        setIsGridVisible(true);
        console.log('Selected item type:', type); // For debugging
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const d = await itemFormData("Part", "56C6D826FE644CF3A5132D5D42E9E818");
                setItemSampleData(d); // Set the fetched data to state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once


    //SearchGrid data 
    const [SearchGridData, setSearchGridData] = useState(null);

    useEffect(() => {
        if (itemtype) {
            const fetchData = async () => {
                try {
                    debugger
                    const d = await itemSearchGrifData(itemtype);
                    setSearchGridData(JSON.parse(d)); // Set the fetched data to state
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();
        }
    }, [itemtype]); // Empty dependency array ensures this runs only once


    return (

        
        <div >
            <header style={styles.header}>
                <div style={styles.logo}>
                    <img src={steepgraph} alt='logo' style={{ height: '34px', width: '200px',padding:'10px' }} />
                    <h1 style={styles.title}></h1>
                    
                </div>
                <button onClick={() => window.location.reload()} style={{ backgroundColor: "#0eb0f6", color:"white",borderRadius:"5px", padding:"5px 10px"}}>
                    Logout
                </button>
            </header>
            <div style={styles.typelist} >
                <select onChange={(e) => handleDivClick(e.target.value)} style={styles.dropdown}>
                    <option value="">Select Item Type</option>
                    {Array.isArray(itemtypeList) &&
                        itemtypeList.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                    ))}
                </select>
              

            </div>
            {isGridVisible && (
                SearchGridData ? (
                    <div>
                        <h1 style={{ textAlign: 'center' }}>{itemtype}</h1>
                        <SearchGrid data={SearchGridData} itemtype_name={itemtype } />
                    </div>
                ) : (
                    <p>Loading data...</p>
                )
            )}
        </div>

    );
}

export default HomePage;
