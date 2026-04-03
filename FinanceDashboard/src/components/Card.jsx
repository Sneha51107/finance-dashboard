export default function Card() {

  const card = [
    {
      title: "Total Balance",
      amount: "₹45,000"
    },
    {
      title: "Income",
      amount: "₹60,000"
    },
    {
      title: "Expenses",
      amount: "₹15,000"
    },
    {
      title: "Savings",
      amount: "₹30,000"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

      {card.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-5"
        >
          <p className="text-gray-500 text-sm">{item.title}</p>
          <h2 className="text-2xl font-bold mt-2">{item.amount}</h2>
        </div>
      ))}

    </div>
  );
}