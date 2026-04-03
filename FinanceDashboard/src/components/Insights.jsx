export default function Insights() {

  const insights = [
    {
      title: "Highest Spending",
      text: "Food - ₹7,000"
    },
    {
      title: "This Month vs Last",
      text: "+12% Expenses up"
    },
    {
      title: "Tip",
      text: "You saved ₹10,000 compared to last month"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl mt-4 shadow h-fit">

      <h2 className="text-lg font-semibold mb-4">
        Insights
      </h2>

      <div className="flex flex-col gap-4">

        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold text-sm">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              {item.text}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}