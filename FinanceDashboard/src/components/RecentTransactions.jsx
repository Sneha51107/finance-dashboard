export default function RecentTransactions() {

  const transactions = [
    {
      date: "Jun 15",
      name: "Salary",
      type: "Income",
      category: "Salary",
      amount: "₹15,000"
    },
    {
      date: "Jun 12",
      name: "Groceries",
      type: "Expense",
      category: "Groceries",
      amount: "₹2,000"
    },
    {
      date: "Jun 10",
      name: "Rent",
      type: "Expense",
      category: "Rent",
      amount: "₹9,000"
    },
    {
      date: "Jun 05",
      name: "Freelance",
      type: "Income",
      category: "Freelance",
      amount: "₹8,000"
    },
    {
      date: "Jun 02",
      name: "Transport",
      type: "Expense",
      category: "Transport",
      amount: "₹1,200"
    }
  ];

  return (
    <div className="bg-white rounded-xl p-5 mt-6 shadow">

      <h2 className="text-lg font-semibold mb-4">
        Recent Transactions
      </h2>

      <table className="w-full text-sm">

        <thead>
          <tr className="text-gray-500 border-b">
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Type</th>
            <th className="text-left py-2">Category</th>
            <th className="text-left py-2">Amount</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((item, index) => (

            <tr key={index} className="border-b">

              <td className="py-3">{item.date}</td>

              <td>{item.name}</td>

              <td>

                <span
                  className={`px-2 py-1 rounded text-xs ${
                    item.type === "Income"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.type}
                </span>

              </td>

              <td>{item.category}</td>

              <td>{item.amount}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}