// src/services/arasAmlService.js
//fetch data from aras using axios


import axios from 'axios';
const ARAS_BASE_URL = process.env.REACT_APP_ARAS_BASE_URL;
const ARAS_API_TOKEN = process.env.REACT_APP_ARAS_API_TOKEN;

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
