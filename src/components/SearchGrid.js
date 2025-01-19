import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const SearchGrid = ({ data }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

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
      <div className="search-bar">
        <h3>BinaryTouch</h3>
      </div>
      <div className="ag-theme-alpine" style={{ width: "100%", height: "calc(100vh - 150px)" }}>
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
        />
      </div>
    </div>
  );
};

export default SearchGrid;
