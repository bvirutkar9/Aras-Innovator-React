// src/components/ItemDetailsAml.js

import React, { useEffect, useState } from 'react';
import { sendItemRequest } from '../services/arasAmlService';
import debounce from 'lodash.debounce';

//const ItemDetailsAml = ({ itemType}) => {
//    const [item, setItem] = useState(null);

//    useEffect(() => {
//        const fetchItem = async () => {
//            const amlQuery = `<Item type='${itemType}' action='get' ></Item>`;

//            try {
//                debugger;
//                const data = await sendItemRequest(amlQuery);
//                setItem(data);
//            } catch (error) {
//                console.error('Error fetching item details using AML:', error);
//            }
//        };

//        fetchItem();
//    }, [itemType]);

//    if (!item) {
//        return <div>Loading...</div>;
//    }

//    return (
//        <div>
//            <h2>Item Details</h2>
//            <pre>{JSON.stringify(item, null, 2)}</pre>
//        </div>
//    );
//};




// Example: ItemDetailsAml.js (if it's fetching data based on the input query)
const ItemDetailsAml = async (itemtype) => {
    // Make an API call to get the filtered data (replace with your actual API call)
    const data = await sendItemRequest(itemtype);
    const itemList = document.getElementById('itemlist');
    //debugger
    if (data && Array.isArray(data.value)) {
        // Clear the existing items before appending new ones (optional)
        itemList.innerHTML = '';

        // Loop through the data and create <li> elements
        data.value.forEach(item => {
            const li = document.createElement('li');  // Create a new <li> element
            li.textContent = item.keyed_name || 'No Name Available';  // Set the text of <li>
            itemList.appendChild(li);  // Append the <li> to the <ul>
        });
    } else {
        const li = document.createElement('li');  // Create a new <li> element
        li.textContent = 'No Itemtype Available';  // Set the text of <li>
        itemList.appendChild(li); 
        console.error('Data is not in the expected format or is empty');
    }
    console.log("1");
    
    console.log("2");
    
    return data; // Assuming data is an array of items
};

export default ItemDetailsAml;
