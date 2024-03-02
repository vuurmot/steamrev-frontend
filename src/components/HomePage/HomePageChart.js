
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip } from 'chart.js';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function HomePageChart() {
    const GameMetricWrapper = styled.div`
    margin: auto;
  .metric {
    color: #6bc527;
    font-size: 50px;
  }

  .metric-description {
    font-size: 20px;
  }
`;
    const [averageEarningsThisYear, setAverageEarningsThisYear] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        await axios.get(`https://localhost:7294/api/metrics/2023`).then((response) => {
            setAverageEarningsThisYear(response.data);
        });
        setDataLoaded(true);
    }
    const currencyFormatter = (number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        (Math.round(number) / 100).toFixed(2)
    );
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
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
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const barData = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 176, 200, 12, 55, 81, 201],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return (
        <Row style={{ padding: 100 }}>
            <Col span={12}>
                <div style={{ maxWidth: 500 }}>
                    <Doughnut data={data} />
                </div>

            </Col>
            <Col span={12}>
                {dataLoaded ? (
                    <div style={{ textAlign: 'center' }}>
                        <GameMetricWrapper>
                            <div className='metric'>{currencyFormatter(averageEarningsThisYear.average_earnings)}</div>
                            <div className='metric-description'>Average revenue</div>
                        </GameMetricWrapper>

                        <GameMetricWrapper>
                            <div className='metric'>{Math.trunc(averageEarningsThisYear.average_sales)}</div>
                            <div className='metric-description'>Average sale count</div>
                        </GameMetricWrapper>
                    </div>
                ) : ""}

                <Row>
                    <div style={{ width: 500, margin: 'auto' }}>
                        <Bar options={options} data={barData} />
                    </div>
                </Row>
            </Col>
        </Row>
    );
}

export default HomePageChart;
