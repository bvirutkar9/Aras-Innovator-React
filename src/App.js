import './App.css';
import React, { useState, useEffect } from 'react';
import reportList from './components/getReportList';
import ItemDetailsAml from './components/ItemDetailsAml';
import KeyValueVisualizer from './components/ItemForm';
import SearchGrid from './components/SearchGrid'; 
import itemFormData from './components/ItemData';
import itemSearchGrifData from './components/searchGridData';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { ItemSearchData } from './services/arasAmlService';
import HomePage from './components/HomePage';

// Then use it in your JSX

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
function App() {
     //item data
     const [ItemSampleData, setItemSampleData] = useState(null);

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
         const fetchData = async () => {
             try {
                 debugger
                 const d = await itemSearchGrifData("Part");
                 setSearchGridData(JSON.parse(d)); // Set the fetched data to state
             } catch (error) {
                 console.error("Error fetching data:", error);
             }
         };

         fetchData();
     }, []); // Empty dependency array ensures this runs only once


    return (
        <div>
            <HomePage />  
        </div>
      

    //  <div>
    //     <h1 style={{ textAlign: "center" }}>React App for Aras Data</h1>
    //      {/* Pass the fetched data to KeyValueVisualizer */}
    //     {ItemSampleData ? (
    //          <KeyValueVisualizer data={ItemSampleData} />
    //      ) : (
    //          <p>Loading data...</p>
    //      )}
    //  </div>
    //<div>
    //    <h1 style={{ textAlign: "center" }}> BinaryTouch </h1>
    //    {
    //        SearchGridData ? (
    //            <SearchGrid data={SearchGridData} />
    //        ) : (
    //            <p>Loading data...</p>
    //        )
    //    }
    //</div>
    
  );
}

export default App;
