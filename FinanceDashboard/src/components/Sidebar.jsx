import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menu = [
    { id: "dashboard", name: "Dashboard", icon: "🏠" },
    { id: "transactions", name: "Transactions", icon: "💳" },
    { id: "insights", name: "Insights", icon: "📊" },
  ];

  return (
    <div className="min-h-screen border-r shadow-xl border-gray-300 w-60 bg-white text-gray-600 flex flex-col justify-between p-4">

      <div>
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-lg font-bold">Finance Dashboard</h2>
        </div>

        <ul className="space-y-3">

  {menu.map((item) => (
    <li
      key={item.id}
      onClick={() => setActive(item.id)}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
      ${
        active === item.id
          ? "bg-blue-600 text-white"
          : "hover:bg-blue-600 "
      }`}
    >
      <span>{item.icon}</span>
      <span>{item.name}</span>
    </li>
  ))}

  <li
    onClick={() => setActive("settings")}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
    ${
      active === "settings"
        ? "bg-blue-600 text-white"
        : "hover:bg-blue-600"
    }`}
  >
    ⚙️ Settings
  </li>

</ul>
      </div>

      
    </div>
  );
}