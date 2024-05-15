"use client";

import React, { useState } from 'react';
import { RepairOrderData } from '../data/RepairOrderData';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { CopyIcon, TruckIcon, MoveVerticalIcon, CreditCardIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Pagination, PaginationContent, PaginationItem } from "../ui/pagination";
import { Separator } from "../ui/separator";

export function RepairOrdersCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const repairOrder = RepairOrderData[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < RepairOrderData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Repair Order: {repairOrder.orderId}
            <Button
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              size="icon"
              variant="outline"
            >
              <CopyIcon className="h-3 w-3" />
              <span className="sr-only">Copy Order ID</span>
            </Button>
          </CardTitle>
          <CardDescription>Date: {repairOrder.date}</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button className="h-8 gap-1" size="sm" variant="outline">
            <TruckIcon className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Track Order</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-8" size="icon" variant="outline">
                <MoveVerticalIcon className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Order Details</div>
          <ul className="grid gap-3">
            {repairOrder.items.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  {item.name} x <span>{item.quantity}</span>
                </span>
                <span>₱{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <Separator className="my-2" />
            <ul className="grid gap-3">
              <div className="font-semibold">Repair Issues</div>
              {repairOrder.repairIssues.map((issue, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="font-semibold">Car Information</div>
            {repairOrder.carInfo.map((car, index) => (
              <div key={index} className="text-muted-foreground">
                <div>Model: {car.model}</div>
                <div>License Plate: {car.licensePlate}</div>
                <div>VIN: {car.VIN}</div>
                <div>Manufacture Date: {car.manufactureDate}</div>
              </div>
            ))}
          </div>
          <div className="grid auto-rows-max gap-3">
            <div className="font-semibold">Billing Information</div>
            <div className="text-muted-foreground">
              <span>{repairOrder.billingInfo.name}</span>
              <span>{repairOrder.billingInfo.address}</span>
              <span>{repairOrder.billingInfo.city}, {repairOrder.billingInfo.province} {repairOrder.billingInfo.zip}</span>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Customer Information</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Customer</dt>
              <dd>{repairOrder.customerInfo.name}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${repairOrder.customerInfo.email}`}>{repairOrder.customerInfo.email}</a>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Phone</dt>
              <dd>
                <a href={`tel:${repairOrder.customerInfo.phone}`}>{repairOrder.customerInfo.phone}</a>
              </dd>
            </div>
          </dl>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Payment Information</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground">
                <CreditCardIcon className="h-4 w-4" />
                {repairOrder.paymentInfo.cardType}
              </dt>
              <dd>{repairOrder.paymentInfo.cardNumber}</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated: <time dateTime={repairOrder.date}>{repairOrder.date}</time>
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button 
                className="h-6 w-6" 
                size="icon" 
                variant="outline" 
                onClick={handlePrevious} 
                disabled={currentIndex === 0}
              >
                <ChevronLeftIcon className="h-3.5 w-3.5" />
                <span className="sr-only">Previous Order</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button 
                className="h-6 w-6" 
                size="icon" 
                variant="outline" 
                onClick={handleNext} 
                disabled={currentIndex === RepairOrderData.length - 1}
              >
                <ChevronRightIcon className="h-3.5 w-3.5" />
                <span className="sr-only">Next Order</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
}
