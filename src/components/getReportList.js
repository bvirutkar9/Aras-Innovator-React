// src/components/ItemDetailsAml.js

import React, { useEffect, useState } from 'react';
import { getReportList } from '../services/arasAmlService';



const reportList = async (itemtype) => {
    // Make an API call to get the filtered data (replace with your actual API call)
    debugger
    const data = await getReportList(itemtype);
    const report_name = data.Item.map((item) => item.name);

    return report_name; // Assuming data is an array of items
};

export default reportList;
