"use client";

import { useState } from "react";
import { CopyIcon, TruckIcon, MoveVerticalIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Pagination, PaginationContent, PaginationItem } from "../ui/pagination";
import { Separator } from "../ui/separator";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { EmployeesData, Employee } from "../data/EmployeesData";

export function EmployeesCard() {
  const [employees] = useState<Employee[]>(EmployeesData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const employee = employees[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < employees.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              {`Employee: ${employee.firstName} ${employee.lastName}`}
              <Button
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                size="icon"
                variant="outline"
              >
                <CopyIcon className="h-3 w-3" />
                <span className="sr-only">Copy Employee ID</span>
              </Button>
            </CardTitle>
            <CardDescription>{`Position: ${employee.position}`}</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button className="h-8 gap-1" size="sm" variant="outline">
              <TruckIcon className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Track Employee</span>
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
                <DropdownMenuItem>Terminate</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Employee Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">{`Status: ${employee.status}`}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">{`Employment Date: ${employee.employmentDate}`}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">{`Employee ID: ${employee.employeeID}`}</span>
              </li>
              <li>
                <span className="text-muted-foreground">{`Active: ${employee.isActive ? "Yes" : "No"}`}</span>
              </li>
            </ul>
          </div>
          <Separator className="my-2"  />
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated: <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button className="h-6 w-6" size="icon" variant="outline" onClick={handlePrevious}>
                  <ChevronLeftIcon className="h-3.5 w-3.5" />
                  <span className="sr-only">Previous Employee</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button className="h-6 w-6" size="icon" variant="outline" onClick={handleNext}>
                  <ChevronRightIcon className="h-3.5 w-3.5" />
                  <span className="sr-only">Next Employee</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}
