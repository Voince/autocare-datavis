import {MostEffectiveSourceKPI,AverageCompletionDaysKPI,AverageRatingKPI} from "@/components/component/MarketEffectivenessKPI";
import { AverageOrderValueKPI, MostCommonRepairIssuesKPI, TotalOrdersKPI, TotalRevenueKPI } from "@/components/component/RepairOrdersKPI";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap- p-4 md:gap-8 md:p-8">
        <p>Repair Orders</p>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <TotalOrdersKPI />
          <TotalRevenueKPI />
          <AverageOrderValueKPI />
        </div>
          <MostCommonRepairIssuesKPI />
        <p>Marketing Effectiveness</p>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <MostEffectiveSourceKPI />
          <AverageCompletionDaysKPI />
          <AverageRatingKPI />
        </div>
    </main>
  );
}
