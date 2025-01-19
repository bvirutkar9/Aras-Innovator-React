// src/services/arasAmlService.js
//fetch data from aras using axios


import axios from 'axios';
const ARAS_BASE_URL = process.env.REACT_APP_ARAS_BASE_URL;
const ARAS_API_TOKEN = process.env.REACT_APP_ARAS_API_TOKEN;
const DB_NAME = process.env.REACT_APP_DB;
export const LoginToken = async (username, password) => {
    try {

        console.time('Request Duration');
        const response = await axios.post(`${ARAS_BASE_URL}OAuthServer/connect/token`, {
            grant_type: "password",
            scope: "Innovator",
            client_id: "IOMApp",
            username: username,
            password: password,
            database: "31Demo"
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        console.timeEnd('Request Duration');



        return response.data;
    } catch (error) {
        console.error('Error getting token:', error);
    }
};


// Function to get itemtype report to Aras Innovator
export const sendReportRequest = async (itemtype) => { 
    
    try {
       
        const payload = {
            param1: itemtype

        };
        console.time('Request Duration');
        const response = await axios.post(`${ARAS_BASE_URL}/server/odata/method.hc_aras_react_method`, payload, {

          headers: {
                'Content-Type': 'application/json',
                'Authorization': ARAS_API_TOKEN, // Replace with actual token
          },
        });
        console.timeEnd('Request Duration');
        


    return response.data;
  } catch (error) {
    console.error('Error sending AML request to Aras:', error);
  }
};


// Function to get itemtype report to Aras Innovator
export const ItemFormData = async (itemtype_name, itemtype_id) => {

    try {

        const payload = {
            param1: itemtype_name,
            param2: itemtype_id
        };
        const response = await axios.post(`${ARAS_BASE_URL}/server/odata/method.hc_aras_react_itemform`, payload, {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': ARAS_API_TOKEN, // Replace with actual token
            },
        });



        return response.data;
    } catch (error) {
        console.error('Error sending AML request to Aras:', error);
    }
};

// Function to get itemtype report to Aras Innovator
export const ItemSearchData = async (itemtype_name) => {

try {

    const payload = {
        param1: itemtype_name
    };
    const response = await axios.post(`${ARAS_BASE_URL}/server/odata/method.hc_aras_react_searchgird`, payload, {

        headers: {
            'Content-Type': 'application/json',
            'Authorization': ARAS_API_TOKEN, // Replace with actual token
        },
    });



    return response.data;
} catch (error) {
    console.error('Error sending AML request to Aras:', error);
}
};

//function to get list of the reports
export const getReportList = async () => {

    try {
        
       
        console.time('Request Duration');
        const response_list = await axios.get(`${ARAS_BASE_URL}/server/odata/ItemType`, {

            headers: {
                'Content-Type': 'application/text',
                'Authorization': ARAS_API_TOKEN, // Replace with actual token
            },
        });
        console.timeEnd('Request Duration');



        return response_list.data;
    } catch (error) {
        console.error('Error sending AML request to Aras:', error);
    }
};
