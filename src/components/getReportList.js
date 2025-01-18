// src/components/ItemDetailsAml.js

import React, { useEffect, useState } from 'react';
import { getReportList } from '../services/arasAmlService';



const reportList = async () => {
    // Make an API call to get the filtered data (replace with your actual API call)
    const data = await getReportList();

    return data; // Assuming data is an array of items
};

export default reportList;
