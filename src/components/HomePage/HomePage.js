
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, Table } from 'antd';
import HomePageChart from './HomePageChart';
function HomePage() {

    const currencyFormatter = (number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        number,
    );
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7294/api/games").then((response) => {
            setGameData(response.data);
        });
    }, [])
    const columns = [
        {
            dataIndex: 'header_image',
            key: 'header_image',
            render: (url) => <img src={url} style={{ maxWidth: 100 }}></img>
        },
        {
            dataIndex: 'name',
            key: 'name',
        },
    ];

    return (
        <>
            <HomePageChart />
            <Row style={{ padding: 50 }}>
                <Col span={12}>
                    <Table pagination={false} dataSource={gameData} columns={columns} />
                </Col>

                <Col span={12}>
                    <Table pagination={false} dataSource={gameData} columns={columns} />
                </Col>
            </Row>
        </>

    );
}

export default HomePage;
