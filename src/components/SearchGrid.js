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
    <div className="search-grid-container">
      <div className="search-bar">
        <h3>BinaryTouch</h3>
      </div>
      <div className="ag-theme-alpine search-grid">
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
            editable:false,
          }}
          pagination={true}
          paginationPageSize={5}
          onGridReady={onGridReady}
          headerHeight={40}
          rowHeight={30}
          rowStyle={{ fontSize: "14px" }}
          suppressDragLeaveHidesColumns={true} 
        />
      </div>
    </div>
  );
};

export default SearchGrid;
