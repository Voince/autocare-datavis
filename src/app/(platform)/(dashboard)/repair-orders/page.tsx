import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { RepairOrdersCard } from "@/components/component/ro-card";
import RepairOrdersTable from "@/components/component/ro-table";
import {CreateRepairOrderButton} from "@/components/component/create-ro-button";
import { TotalOrdersKPI, TotalRevenueKPI, AverageOrderValueKPI, MostCommonRepairIssuesKPI } from "@/components/component/KPI/RepairOrdersKPI";

export default function RepairOrdersPage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
       <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle>Repair Orders</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                Oversee your repair orders with offering creation, viewing, and efficient management of every repair order.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CreateRepairOrderButton />
              </CardFooter>
            </Card>
            <TotalRevenueKPI />
            <TotalOrdersKPI />
          </div>
          <RepairOrdersTable />
        </div>
        <RepairOrdersCard />
    </main>
  );
}
