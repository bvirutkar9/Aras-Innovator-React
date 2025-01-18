import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 

const SearchGrid = ({ data }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  // Generate columns dynamically from the data keys
  const columns = Object.keys(data[0]).map((key) => ({
    headerName: key.toUpperCase(),
    field: key,
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
  }));

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  // Quick Filter for search functionality
  const onQuickFilterChange = (e) => {
    gridApi.setQuickFilter(e.target.value);
  };

  return (
    <div style={{ width: "100%", height: "500px", backgroundColor: "#5FB7E0" }}>
      <div style={{ marginBottom: "10px", padding: "10px" }}>
        <input
          type="text"
          placeholder="Search..."
          onChange={onQuickFilterChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
          }}
        />
      </div>
      <div
        className="ag-theme-alpine"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
          pagination={true}
          paginationPageSize={5}
          onGridReady={onGridReady}
          headerHeight={40}
          rowHeight={30}
          rowStyle={{ fontSize: "14px" }}
        />
      </div>
    </div>
  );
};

export default SearchGrid;