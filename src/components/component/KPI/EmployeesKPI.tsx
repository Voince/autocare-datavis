import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"
import { Employee, EmployeesData } from "@/components/data/EmployeesData";

// Function to count total employees
function countTotalEmployees(employees: Employee[]): number {
    return employees.length;
}

// Function to count total active employees
function countActiveEmployees(employees: Employee[]): number {
    return employees.filter(employee => employee.isActive).length;
}

export function TotalNumberEmployeesKPI(){
    const totalEmployees = countTotalEmployees(EmployeesData);
    const activeEmployees = countActiveEmployees(EmployeesData);
    const inactiveEmployees = totalEmployees - activeEmployees;

    return (
        <Card>
        <CardHeader className="pb-2">
            <CardDescription>Inactive Employees in the Company</CardDescription>
            <CardTitle className="text-6xl">{inactiveEmployees}</CardTitle>
            <br />
        </CardHeader>
        <CardFooter>
            <Progress aria-label="25% increase" value={(inactiveEmployees/totalEmployees)*100} />
        </CardFooter>
        </Card>
    );
}

export function TotalNumberActiveEmployeesKPI(){
    const totalEmployees = countTotalEmployees(EmployeesData);
    const activeEmployees = countActiveEmployees(EmployeesData);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Total Active Number of Employees</CardDescription>
                <CardTitle className="text-6xl">{activeEmployees}/{totalEmployees}</CardTitle>
                <br />
            </CardHeader>
            <CardFooter>
                <Progress aria-label="12% increase" value={(activeEmployees/totalEmployees)*100} />
            </CardFooter>
        </Card>
    );
}
