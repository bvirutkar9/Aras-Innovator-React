import '../App.css';
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { ItemSearchData } from '../services/arasAmlService';

// Then use it in your JSX

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
function LoginPage() {

    return (

        <div>
            <h1>Login Page</h1>
        </div>

    );
}

export default LoginPage;
