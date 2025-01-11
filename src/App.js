
//import './App.css';
//import ItemDetailsAml from './components/ItemDetailsAml';
//function App() {
//  return (
//    <div className="App">
//          <h1>Aras Innovator</h1>
//          <h1>Itemtypes</h1>
//          <input></input>

//          <li></li>
//    </div>
//  );
//}

//export default App;
import React, { useState, useEffect } from 'react';
import ItemDetailsAml from './components/ItemDetailsAml';
import debounce from 'lodash.debounce';

function App() {
    const [inputValue, setInputValue] = useState(''); // State to hold input value
    const [data, setData] = useState([]); // State to hold the list of fetched data

    // Function to handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Set input value as the user types
    };

    // Debounced function to fetch data
    const fetchData = debounce(async () => {
        if (inputValue) {
            // Fetch data based on the current input value
            //const temp = 'sg_cwo'  //temperary itemtype name
            const response = await ItemDetailsAml(inputValue);

            // Assuming response is an object with a property `value` that holds the array of data
            if (response && Array.isArray(response.value)) {
                // Append the new data to the existing data list
                debugger;
                setData((prevData) => [...prevData, ...response.value]);
            } else {
                console.error('Response is not in the expected format:', response);
            }
        }
    }, 100);

    // Run the debounced fetch function when the input value changes
    useEffect(() => {
        if (inputValue) {
            fetchData(); // Fetch data if input value exists
        }
        return () => fetchData.cancel(); // Cleanup the debounce on component unmount
    }, [inputValue]);

    return (
        <div className="App">
            <h1>Aras Innovator</h1>
            <h2>Itemtypes</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} // Trigger state update on input change
                placeholder="Search for Itemtypes"
            />

            <ul id='itemlist'>
            </ul>
        </div>
    );
}

export default App;

