import { TotalNumberActiveEmployeesKPI, TotalNumberEmployeesKPI } from '@/components/component/KPI/EmployeesKPI';
import { CreateEmployeeButton } from '@/components/component/employee components/create-employee-button';
import { EmployeesCard } from '@/components/component/employee components/employees-card';
import EmployeesTable from '@/components/component/employee components/employees-table';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function EmployeesPage() {
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                    <CardHeader className="pb-3">
                        <CardTitle>Employees</CardTitle>
                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                        Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <CreateEmployeeButton />
                    </CardFooter>
                    </Card>
                    <TotalNumberActiveEmployeesKPI />
                    <TotalNumberEmployeesKPI />
                </div>
                <EmployeesTable />
            </div>
            <EmployeesCard />
        </main>
    );
}