"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'balance chart',
    },
  },
};





export default function App({ x_data, y_data }: { x_data: any, y_data: any }) {
  const labels = x_data.map((dt: any) => dt.toISOString().split("T")[0]);
  const data: any = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'balance',
        cubicInterpolationMode: 'monotone',
        data: y_data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}