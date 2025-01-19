// src/components/ItemDetailsAml.js

import React, { useEffect, useState } from 'react';
import { ItemFormData } from '../services/arasAmlService';



const itemFormData = async (itemtype_name,itemtype_id) => {
    // Make an API call to get the filtered data (replace with your actual API call)
    const data = await ItemFormData(itemtype_name,itemtype_id);
    
    return data; // Assuming data is an array of items
};

export default itemFormData;
