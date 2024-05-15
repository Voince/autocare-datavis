import { EmployeesCard } from '@/components/component/EmployeesCard';
import EmployeesTable from '@/components/component/EmployeesTable';
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
                        <CardTitle>Your Employees</CardTitle>
                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                        Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button>Create New Employee</Button>
                    </CardFooter>
                    </Card>
                    <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Total Number of Employees</CardDescription>
                        <CardTitle className="text-4xl">25</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">+25% from last week</div>
                    </CardContent>
                    <CardFooter>
                        <Progress aria-label="25% increase" value={25} />
                    </CardFooter>
                    </Card>
                    <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>This Month</CardDescription>
                        <CardTitle className="text-4xl">$5,329</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">+10% from last month</div>
                    </CardContent>
                    <CardFooter>
                        <Progress aria-label="12% increase" value={12} />
                    </CardFooter>
                    </Card>
                </div>
                
                <EmployeesTable />
            </div>
            <EmployeesCard />
        </main>
    );
}