"use client";

import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Employee,EmployeesData } from "@/components/data/EmployeesData"; 

export default function EmployeesTable() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Employees</CardTitle>
        <CardDescription>Employees who are currently working</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee's Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Employment Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {EmployeesData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(employee.status)}>{employee.status}</Badge>
                </TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.employmentDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function getBadgeVariant(status: string) {
  switch (status) {
    case "Active":
      return "default";
    case "On Leave":
      return "outline";
    case "Terminated":
      return "destructive";
    default:
      return "default";
  }
}
