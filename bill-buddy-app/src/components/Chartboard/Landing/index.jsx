import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Landing = () => {
  const bills = useSelector((state) => state.bills.billsList);
  const labels = bills.map((bill) => bill.desc);
  const amount = bills.map((bill) => bill.amt);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: amount,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut
      height={30}
      responsive="true"
      width={60}
      options={{
        maintainAspectRatio: false,
      }}
      data={data}
    ></Doughnut>
  );
};

export default Landing;
