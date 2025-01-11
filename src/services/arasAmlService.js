// src/services/arasAmlService.js
//fetch data from aras using axios


import axios from 'axios';
//const ARAS_BASE_URL = process.env.REACT_APP_ARAS_BASE_URL; // Aras server URL
const ARAS_BASE_URL = "http://localhost/12sp9";
const REACT_APP_ARAS_API_TOKEN = "Bearer " + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkFFNzBBMDZFMzdDNjJENTZCMzA0NzFDRTFDODk2MjZCRENCMkFBRUEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJybkNnYmpmR0xWYXpCSEhPSElsaWE5eXlxdW8ifQ.eyJuYmYiOjE3MzY1OTIxODUsImV4cCI6MTczNjU5NTc4NSwiaXNzIjoiT0F1dGhTZXJ2ZXIiLCJhdWQiOlsiT0F1dGhTZXJ2ZXIvcmVzb3VyY2VzIiwiSW5ub3ZhdG9yIl0sImNsaWVudF9pZCI6Iklubm92YXRvckNsaWVudCIsInN1YiI6InJvb3QiLCJhdXRoX3RpbWUiOjE3MzY1OTIxODUsImlkcCI6ImxvY2FsIiwidXNlcm5hbWUiOiJyb290IiwiZGF0YWJhc2UiOiJPTE1fUUEiLCJzY29wZSI6WyJJbm5vdmF0b3IiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicGFzc3dvcmQiXX0.Oh5_WDdYHozjz3NzWYbO9-22p1ONphpyncjs3kn5PuWYLPocCQ3_5c2jrVuWj1Y7c0Te7XFWX0ANa2Gr8BaYOc0lPui7aWbrxT6WhIHdXv2Tz9LsQZmFjja2hIl-tTyntIo1ifGGyMZd1i936RsaoX5JPoP7Vb5o_dkvs6r9Q0fKlLRHW6X6BDjJr3qVHacSitae_8Ra-xz3AkgXrt7fKf0UeL_lEQki3oSd0jW0y_Myfv1wwMrcLZR47uIpx8YyMfJhrV-pwgcs6lWkCYDLLfAyKLPstqiEekJjIYYSCalUdN3dl2VzGiN_fc4rGWxBPFNtbI02r0mO9vayPg0oMw"

// Function to send AML query to Aras Innovator
export const sendItemRequest = async (itemtype) => {
    //debugger;
    
    try {
      //debugger;
      //const response = await axios.post(`${ARAS_BASE_URL}/Server/InnovatorServer.aspx`, amlPayload, {
      //    headers: {
      //      'Content-Type': 'text/xml',
      //      'Authorization': REACT_APP_ARAS_API_TOKEN, // Optional, if required
      //    },
      //});
      debugger
        const response = await axios.get(`${ARAS_BASE_URL}/server/odata/List?$filter=contains(name,sg)`, {
          headers: {
              'Content-Type': 'text/xml',
              'Authorization': REACT_APP_ARAS_API_TOKEN, // Replace with actual token
          },
      });

    return response.data;
  } catch (error) {
    console.error('Error sending AML request to Aras:', error);
  }
};
