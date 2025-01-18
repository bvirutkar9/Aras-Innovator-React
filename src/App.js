import './App.css';
import React, { useState, useEffect } from 'react';
import reportList from './components/getReportList';
import ItemDetailsAml from './components/ItemDetailsAml';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
function App() {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [gridData, setGridData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([]);

    useEffect(() => {
        // Fetch initial data
        debugger;
        const fetchData = async () => {
            const result = await reportList();
            setData(result.value);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (gridData.length > 0) {
            const sampleData = gridData[0];
            const columns = Object.keys(sampleData).map((key) => ({
                headerName: key.replace('@', '').replace('.', ' ').toUpperCase(),
                field: key,
                sortable: true,
                filter: true
            }));
            setColumnDefs(columns);
        }
    }, [gridData]);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleButtonClick = async () => {
        if (selectedValue) {
            // Simulate fetching detailed report data based on the selected item
            const reportData = await ItemDetailsAml(selectedValue);

            // Transform the data to replace object values with their keyed_name value
            const transformedData = reportData.Item.map(item => {
                let newItem = { ...item };
                for (let key in newItem) {
                    if (newItem[key] && typeof newItem[key] === 'object' && newItem[key].hasOwnProperty('@aras.keyed_name')) {
                        newItem[key] = newItem[key].keyed_name; // Replace object with its keyed_name
                    }
                }
                return newItem;
            });
            setGridData(transformedData); // Set the data for AG Grid
        } else {
            console.log('Please select an item first');
        }
    };

    return (
        <div className="App">
            <h1>Select an Item</h1>
            <select onChange={handleSelectChange} value={selectedValue}>
                <option value="">--Select an Item--</option>
                {data.map((item, index) => (
                    <option key={index} value={item["hc_parent_item@aras.name"]}>
                        {item["hc_parent_item@aras.name"]}
                    </option>
                ))}
            </select>
            <button onClick={handleButtonClick}>Get Report</button>

            <div className="ag-theme-alpine" style={{ height: 400, width: '100%', marginTop: '20px' }}>
                <AgGridReact
                    rowData={gridData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
        </div>
    );
}

export default App;
