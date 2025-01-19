import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import KeyValueVisualizer from './ItemForm';
import itemFormData from './ItemData';
const SearchGrid = ({ data, itemtype_name }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
    const [isGridVisible, setIsGridVisible] = useState(true); // Control visibility
    const [selectedRow, setSelectedRow] = useState(null); // Keep track of the selected row
    const [ItemSampleData, setItemSampleData] = useState(null);
    const [itemtypeId, setItemtypeId] = useState('');
  const columns = Object.keys(data[0]).map((key) => ({
    headerName: key.toUpperCase(),
    field: key,
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    minWidth: 150,
  }));

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };
const onRowDoubleClicked = (event) => {
    setIsGridVisible(false); // Hide the grid
    const fetchData = async () => {
        try {
            debugger
            const d = await itemFormData(itemtype_name, event.data.id);
            setItemSampleData(d); // Set the fetched data to state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData()
    console.log("Row double-clicked: ", event.data.id); // For debugging
};


  const gridOptions = {
    floatingFilter: true, // Display filter input below the header
  };
  
  const [columnDefs] = useState([
    {
      filter: true, // Default text filter
      filter: "agTextColumnFilter", // Explicitly use text filter
      filterParams: {
        caseSensitive: true, // Example filter parameter
        buttons: ["apply", "clear"], // Show Apply and Clear buttons
      },
    },
  ]);

  const getRowHeight = () => (window.innerWidth < 768 ? 40 : 30);

  return (
      <div className="search-grid-container">
          {isGridVisible ? (
              <>
                  <div className="search-bar"></div>
                  <div className="ag-theme-alpine" style={{ width: "100%", height: "calc(85vh - 150px)" }}>
                      <AgGridReact
                          rowData={data}
                          columnDefs={columns}
                          defaultColDef={{
                              sortable: true,
                              resizable: true,
                              filter: "agTextColumnFilter",
                              filterParams: {
                                  caseSensitive: true,
                                  buttons: ["apply", "clear"], // Include Apply and Clear buttons in the filter
                              },
                          }}
                          pagination={true}
                          paginationPageSize={window.innerWidth < 768 ? 3 : 10}
                          onGridReady={onGridReady}
                          getRowHeight={getRowHeight}
                          onRowDoubleClicked={onRowDoubleClicked} // Add double-click event handler
                      />
                  </div>
              </>
          ) : (
              // Render KeyValueVisualizer if the grid is hidden
              ItemSampleData ? (
                  <KeyValueVisualizer data={ItemSampleData} />
              ) : (
                  <p>Loading data...</p>
              )
          )}
      </div>

  );
};

export default SearchGrid;
