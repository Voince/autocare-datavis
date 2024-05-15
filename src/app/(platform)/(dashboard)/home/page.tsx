import {MostEffectiveSourceKPI,AverageCompletionDaysKPI,AverageRatingKPI} from "@/components/component/KPI/MarketEffectivenessKPI";
import { AverageOrderValueKPI, MostCommonRepairIssuesKPI, TotalOrdersKPI, TotalRevenueKPI } from "@/components/component/KPI/RepairOrdersKPI";
import { Overview } from "@/components/component/overview";

export default function HomePage() {
 return(
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-4 xl:grid-cols-2">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <TotalOrdersKPI />
            <TotalRevenueKPI />
            <AverageOrderValueKPI />
            <MostCommonRepairIssuesKPI />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3">
          <MostEffectiveSourceKPI />
          <AverageCompletionDaysKPI />
          <AverageRatingKPI />
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Overview />
        </div>
      </div>
    </main>
  );
}
