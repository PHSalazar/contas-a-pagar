import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Pago", "Em aberto", "Em atraso", "A Pagar"],
    datasets: [
      {
        label: "Situação das Contas",
        data: [50, 30, 10, 10],
        backgroundColor: ["#36eba6", "#FFCD56", "#FF6384", "#36A2EB"],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    reponsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        enable: true,
      },
    },
  };

  return (
    <div className="w-full h-72 flex items-center justify-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default DoughnutChart;
