
import { useEffect, useState } from 'react';
import GameDetailsChart from './GameDetailsChart';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GameDetails() {
  const GameDetailsWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;
  const GameMetricWrapper = styled.div`
  margin-left: 30px;
  .metric {
    color: #6bc527;
    font-size: 40px;
  }

  .metric-description {
    font-size: 15px;
  }
`;
  const { id } = useParams();
  const currencyFormatter = (number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    number,
  );
  const [gameData, setGameData] = useState({});
  useEffect(() => {
    axios.get(`https://localhost:7294/api/games/${id}`).then((response) => {
      setGameData(response.data);
    });
  }, []);
  return (
    <GameDetailsWrapper>
      <Row style={{ marginTop: 50, marginBottom: 50 }}>
        <Col span={12}>
          <div>
            <img src={gameData.header_image} style={{ borderRadius: 10, width: "100%" }}></img>
            <p>{gameData.short_description}</p>
          </div>
        </Col>
        <Col span={12}>


        </Col>
      </Row>
      <Row style={{ padding: 20, backgroundColor: "#20232e", borderRadius: 10 }} justify={'center'}>
        <Col>
          <GameMetricWrapper>
            <div className='metric'>3002</div>
            <div className='metric-description'>Est. Sales</div>
          </GameMetricWrapper>

        </Col>
        <Col>

          <GameMetricWrapper>
            <div className='metric'>{currencyFormatter(40216)}</div>
            <div className='metric-description'>Est. Revenue</div>
          </GameMetricWrapper>
        </Col>
        <Col>

          <GameMetricWrapper>
            <div className='metric'>{currencyFormatter(755221)}</div>
            <div className='metric-description'>Projected Revenue</div>
          </GameMetricWrapper>
        </Col>
      </Row>
      <Row style={{ marginTop: 50, marginBottom: 50, backgroundColor: "#20232e", borderRadius: 10, }} justify={'center'}>
        <GameDetailsChart />
      </Row>
    </GameDetailsWrapper>

  );
}

export default GameDetails;
