import './App.css';
import React, { useState, useEffect } from 'react';
import itemSearchGrifData from './components/searchGridData';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

function App() {

    const isLogin = true;
    return (
        <div>
            <HomePage />  
            {isLogin ? (
                  <HomePage  />
              ) : (
                  <LoginPage  />
              )}
        </div>
    
  );
}

export default App;
