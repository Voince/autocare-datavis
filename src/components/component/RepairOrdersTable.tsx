"use client";

import React, { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "../ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { ListFilterIcon, FileIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";
import { Badge } from "../ui/badge";
import { RepairOrderData } from "@/components/data/RepairOrderData"; // Make sure to adjust the path to your data file

interface Row {
  customer: string;
  email: string;
  date: string;
  amount: string;
  status: string;
  statusVariant: "secondary" | "outline" | "default" | "destructive" | null | undefined;
}

const RepairOrdersTable: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("All");

    const getStatusVariant = (status: string): Row["statusVariant"] => {
        switch (status) {
            case "Fulfilled":
                return "secondary";
            case "Declined":
                return "destructive";
            case "In Progress":
                return "outline";
            default:
                return null;
        }
    };

    const transformData = (data: typeof RepairOrderData): Row[] => {
        return data.map(order => ({
            customer: order.billingInfo.name,
            email: order.customerInfo.email,
            date: order.date,
            amount: `₱${order.total.toFixed(2)}`,
            status: order.status,
            statusVariant: getStatusVariant(order.status)
        }));
    };

    const handleClickTab = (tab: string) => {
        setActiveTab(tab);
    };

    const tabsContent: Record<string, Row[]> = {
        All: transformData(RepairOrderData),
        Fulfilled: transformData(RepairOrderData).filter(row => row.status === "Fulfilled"),
        Declined: transformData(RepairOrderData).filter(row => row.status === "Declined"),
        InProgress: transformData(RepairOrderData).filter(row => row.status === "In Progress"),
    };

    return (
        <Tabs defaultValue="All">
            <div className="flex items-center">
                <TabsList>
                    <TabsTrigger value="All" onClick={() => handleClickTab("All")}>All</TabsTrigger>
                    <TabsTrigger value="Fulfilled" onClick={() => handleClickTab("Fulfilled")}>Fulfilled</TabsTrigger>
                    <TabsTrigger value="Declined" onClick={() => handleClickTab("Declined")}>Declined</TabsTrigger>
                    <TabsTrigger value="InProgress" onClick={() => handleClickTab("InProgress")}>In Progress</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>Fulfilled</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>In Progress</DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="h-7 gap-1 text-sm" size="sm" variant="outline">
                        <FileIcon className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Export</span>
                    </Button>
                </div>
            </div>
            <TabsContent value={activeTab}>
                <Card>
                    <CardHeader className="px-7">
                        <CardTitle>{activeTab} Orders</CardTitle>
                        <CardDescription>List of {activeTab.toLowerCase()} orders.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Customer</TableHead>
                                    <TableHead className="hidden md:table-cell">Date</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tabsContent[activeTab].map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div className="font-medium">{row.customer}</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">{row.email}</div>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">{row.date}</TableCell>
                                        <TableCell className="text-right">{row.amount}</TableCell>
                                        <TableCell>
                                            {row.statusVariant && <Badge className="text-xs" variant={row.statusVariant}>{row.status}</Badge>}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

export default RepairOrdersTable;
