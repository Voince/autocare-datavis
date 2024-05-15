"use client";

// Import RepairOrderData from your data source
import { RepairOrderData } from '@/components/data/RepairOrderData';
import { Progress } from '@radix-ui/react-progress';
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from '../ui/card';

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

// Function to calculate total revenue
export function TotalRevenueKPI() {
    const totalRevenue = calculateTotalRevenue(RepairOrderData);
    
    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-4xl">${totalRevenue}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">+25% from last week</div>
            </CardContent>
        </Card>
    );
}

// Function to calculate average order value (AOV)
export function AverageOrderValueKPI() {
    const averageOrderValue = calculateAverageOrderValue(RepairOrderData);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Average Order Value</CardDescription>
                <CardTitle className="text-4xl">${averageOrderValue}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">+10% from last month</div>
            </CardContent>
            <CardFooter>
                <Progress aria-label="12% increase" value={12} />
            </CardFooter>
        </Card>
    );
}

// Function to count total orders
export function TotalOrdersKPI() {
    const totalOrders = countTotalOrders(RepairOrderData);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Total Orders</CardDescription>
                <CardTitle className="text-4xl">{totalOrders}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">-</div>
            </CardContent>
            <CardFooter>
                <Progress aria-label="No change" value={0} />
            </CardFooter>
        </Card>
    );
}

// Function to determine the most common repair issues
export function MostCommonRepairIssuesKPI() {
    const mostCommonIssues = getMostCommonRepairIssues(RepairOrderData);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Most Common Repair Issues</CardDescription>
                <CardTitle className="text-4xl">{mostCommonIssues.join(', ')}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">-</div>
            </CardContent>
            <CardFooter>
                <Progress aria-label="No change" value={0} />
            </CardFooter>
        </Card>
    );
}
