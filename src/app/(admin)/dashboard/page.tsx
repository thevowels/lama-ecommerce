import { CustomerRegionPieChart } from "../components/CustomerRegionPieChart";
import LatestTransactions from "../components/LatestTransactions";
import { RevenueChart } from "../components/RevenueChart";
import { SourceTrendChart } from "../components/SourceTrendChart";

export default function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
		<RevenueChart/>
	  </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
		<LatestTransactions/>
	  </div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
		<SourceTrendChart/>
	  </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CustomerRegionPieChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
    </div>
  );
}
