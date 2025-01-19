// src/components/ItemDetailsAml.js

import React, { useEffect, useState } from 'react';
import { ItemSearchData } from '../services/arasAmlService';



const itemSearchGrifData = async (itemtype_name) => {
    // Make an API call to get the filtered data (replace with your actual API call)
    const data = await ItemSearchData(itemtype_name);

    return data; // Assuming data is an array of items
};

export default itemSearchGrifData;
