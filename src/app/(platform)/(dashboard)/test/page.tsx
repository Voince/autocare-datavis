import React from 'react';

// Import RepairOrderData from your data source
import { RepairOrderData } from '@/components/data/RepairOrderData';

// Function to calculate total revenue
const calculateTotalRevenue = (orders: any[]): number => {
    return orders.reduce((total, order) => total + order.total, 0);
}

// Function to calculate average order value (AOV)
const calculateAverageOrderValue = (orders: any[]): number => {
    const totalRevenue = calculateTotalRevenue(orders);
    const totalOrders = orders.length;
    return totalRevenue / totalOrders;
}

// Function to count total orders
const countTotalOrders = (orders: any[]): number => {
    return orders.length;
}

// Function to determine the most common repair issues
const getMostCommonRepairIssues = (orders: any[]): string[] => {
    const allIssues = orders.flatMap(order => order.repairIssues);
    const issueCounts = allIssues.reduce((acc, issue) => {
        acc[issue] = (acc[issue] || 0) + 1;
        return acc;
    }, {});
    const sortedIssues = Object.keys(issueCounts).sort((a, b) => issueCounts[b] - issueCounts[a]);
    return sortedIssues.slice(0, 3); // Return top 3 most common issues
}

const StatisticsComponent: React.FC = () => {
    // Calculate statistics
    const totalRevenue = calculateTotalRevenue(RepairOrderData);
    const averageOrderValue = calculateAverageOrderValue(RepairOrderData);
    const totalOrders = countTotalOrders(RepairOrderData);
    const mostCommonIssues = getMostCommonRepairIssues(RepairOrderData);

    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Revenue: ${totalRevenue}</p>
            <p>Average Order Value: ${averageOrderValue}</p>
            <p>Total Orders: {totalOrders}</p>
            <p>Most Common Repair Issues: {mostCommonIssues.join(', ')}</p>
        </div>
    );
}

export default StatisticsComponent;
