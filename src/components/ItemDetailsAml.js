// src/components/ItemDetailsAml.js

import React, { useEffect, useState } from 'react';
import { sendReportRequest } from '../services/arasAmlService';



const ItemDetailsAml = async (itemtype) => {
    // Make an API call to get the filtered data (replace with your actual API call)
    const data = await sendReportRequest(itemtype);
    
    return data; // Assuming data is an array of items
};

export default ItemDetailsAml;
