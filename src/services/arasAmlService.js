// src/services/arasAmlService.js
//fetch data from aras using axios


import axios from 'axios';
//const ARAS_BASE_URL = process.env.REACT_APP_ARAS_BASE_URL; // Aras server URL
const ARAS_BASE_URL = "http://localhost/12sp9";
const REACT_APP_ARAS_API_TOKEN = "Bearer " + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkFFNzBBMDZFMzdDNjJENTZCMzA0NzFDRTFDODk2MjZCRENCMkFBRUEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJybkNnYmpmR0xWYXpCSEhPSElsaWE5eXlxdW8ifQ.eyJuYmYiOjE3MzY1OTcxOTcsImV4cCI6MTczNjYwMDc5NywiaXNzIjoiT0F1dGhTZXJ2ZXIiLCJhdWQiOlsiT0F1dGhTZXJ2ZXIvcmVzb3VyY2VzIiwiSW5ub3ZhdG9yIl0sImNsaWVudF9pZCI6Iklubm92YXRvckNsaWVudCIsInN1YiI6InJvb3QiLCJhdXRoX3RpbWUiOjE3MzY1OTcxOTcsImlkcCI6ImxvY2FsIiwidXNlcm5hbWUiOiJyb290IiwiZGF0YWJhc2UiOiJPTE1fUUEiLCJzY29wZSI6WyJJbm5vdmF0b3IiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicGFzc3dvcmQiXX0.GkcBmI-RuJE50Hi5mH1AgTCC9gF-XNf4pLlNxtt2ICzVKC7YTQOJANBKqTyB3lS13jW6fUnpAqUCU3D_d5PExivBNeyl5SEd4MO8snxiDOZwuiGuvXGN6ne76R3OlGvcL0m67O_n43YyNjDKXwuJSNODmPN0TfBAs_X_abvJd8qiTMzrM1HGBA4hnBbhxWAP2pH08unGUUkakEA8lUhnGYyrB6GIdrzwYqwkvMZqmw-Kb-iMQ3Hk-mou0TPAoz9dRY1r6RiLicfiWF48qz876Gfj2jsVxnW7kpivw--4z275iBwoSHFsQUCmGfpT19QvYPrvw05F-iwAr-OxLXtxNA"



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
        //debugger
        const payload = {
            param1: itemtype
            
        };
        const response = await axios.post(`${ARAS_BASE_URL}/server/odata/method.hc_aras_react_method`,payload, {
          headers: {
                'Content-Type': 'application/json',
              'Authorization': REACT_APP_ARAS_API_TOKEN, // Replace with actual token
          },
      });

    return response.data;
  } catch (error) {
    console.error('Error sending AML request to Aras:', error);
  }
};
