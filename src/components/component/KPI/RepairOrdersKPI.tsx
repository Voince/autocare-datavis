"use client";

// Import RepairOrderData from your data source
import { RepairOrderData } from '@/components/data/RepairOrderData';
import  {Progress} from "@/components/ui/progress";
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from '../../ui/card';

// Function to calculate total revenue
const calculateTotalRevenue = (orders: any[]): number => {
    return orders.reduce((total, order) => total + order.total, 0);
}

// Function to calculate average order value (AOV)
const calculateAverageOrderValue = (orders: any[]): number => {
    const totalRevenue = calculateTotalRevenue(orders);
    const totalOrders = orders.length;
    return Math.round(((totalRevenue / totalOrders)+ Number.EPSILON) * 100)/ 100;
}

// Function to count total orders
const countTotalOrders = (orders: any[]): number => {
    return orders.length;
}

// Function to count total in progress orders
function countInProgressOrders(orders: any[]): number {
    let inProgressCount: number = 0;
    orders.forEach(order => {
        if (order.status === "In Progress") {
            inProgressCount++;
        }
    });
    return inProgressCount;
}

// Function to determine the most common repair issues
const getMostCommonRepairIssues = (orders: any[]): string[] => {
    const allIssues = orders.flatMap(order => order.repairIssues);
    const issueCounts = allIssues.reduce((acc, issue) => {
        acc[issue] = (acc[issue] || 0) + 1;
        return acc;
    }, {});
    const sortedIssues = Object.keys(issueCounts).sort((a, b) => issueCounts[b] - issueCounts[a]);
    return sortedIssues.slice(0, 3); 
}

// Function to calculate total revenue
export function TotalRevenueKPI() {
    const totalRevenue = calculateTotalRevenue(RepairOrderData);
    
    return (
        <Card>
            <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-6xl">₱{totalRevenue}</CardTitle>
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
                <CardTitle className="text-4xl">₱{averageOrderValue}</CardTitle>
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
    const totalPendingOrders = countInProgressOrders(RepairOrderData);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Total In-Progress Repair Orders</CardDescription>
                <CardTitle className="text-6xl">{totalPendingOrders}/{totalOrders}</CardTitle>
                <br />
            </CardHeader>
            <CardFooter>
                <Progress value={(totalPendingOrders/totalOrders)*100}/>
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
                <div>
                    {mostCommonIssues.map((issue, index) => (
                        <CardTitle key={index} className="text-2xl">{issue}</CardTitle>
                    ))}
                </div>
            </CardHeader>
        </Card>
    );
}
