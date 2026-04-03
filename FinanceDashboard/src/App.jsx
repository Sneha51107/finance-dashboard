import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import BalanceTrend from "./components/BalanceTrend";
import Insights from "./components/Insights";
import RecentTransactions from "./components/RecentTransactions";
function App() {
  return (
    <div className="flex min-h-screen bg-gray-200">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex flex-col flex-1">

        <Header />

        <div className="p-6 w-full">

          <Card />

          <div className="grid grid-cols-3 gap-6 mt-6">

            <div className="col-span-2">
              <BalanceTrend />
              <RecentTransactions />
            </div>

            <Insights />
         
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;