import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
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
    Legend
);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [1, 2, 3, 55, 66, 777, 1112],
            borderColor: '#96ba2e',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};
function GameDetailsChart() {
    return (
        <div style={{ width: "80%" }}>
            <Line
                options={options}
                data={data}

            />
        </div>
    );
}

export default GameDetailsChart;
