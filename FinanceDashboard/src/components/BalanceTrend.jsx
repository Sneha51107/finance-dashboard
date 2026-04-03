import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function BalanceTrend() {

  const data = [
    { month: "Jan", income: 8000, expense: 5000 },
    { month: "Feb", income: 12000, expense: 7000 },
    { month: "Mar", income: 20000, expense: 10000 },
    { month: "Apr", income: 18000, expense: 9000 },
    { month: "May", income: 25000, expense: 15000 },
    { month: "Jun", income: 30000, expense: 20000 }
  ];

  const pieData = [
    { name: "Food", value: 7000 },
    { name: "Shopping", value: 5000 },
    { name: "Bills", value: 4000 },
    { name: "Travel", value: 3000 },
    { name: "Other", value: 2000 }
  ];

  const COLORS = ["#3b82f6","#22c55e","#f59e0b","#ef4444","#a855f7"];

  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-6">

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line type="monotone" dataKey="income" stroke="#22c55e" />
            <Line type="monotone" dataKey="expense" stroke="#ef4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Donut Chart */}
      <div className="bg-white p-6 text to-blue-950 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Spending Breakdown
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}