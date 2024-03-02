
import React, { } from 'react';
import logo from '../logo.png'
import { Col, ConfigProvider, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Navbar = ({ handleOnSearchFocus, handleOnSearchBlur }) => {
    const searchSuffix = (
        <SearchOutlined
            style={{
                fontSize: 16,
                color: '#f3f3f3',
            }}
        />
    )

    const StyledLink = styled(Link)`
        color: #BF4F74;
        font-weight: bold;
        :hover {
            filter: brightness(0) saturate(100%) invert(41%) sepia(19%) saturate(4751%) hue-rotate(198deg) brightness(95%) contrast(96%);
        }
      `;

    return (
        <Row justify={'center'}>
            <Col>
                <StyledLink to="/"> <img src={logo} width={32} style={{ verticalAlign: 'middle' }} /></StyledLink>
            </Col>
            <Col>
                <Link to="/about">About</Link>
            </Col>
            <Col>
                <ConfigProvider
                    theme={{
                        token: {
                            borderRadius: 6,
                            colorBgBase: "#333333",
                            colorTextPlaceholder: "#f3f3f3",
                        },
                    }}
                >
                    <Input onFocus={handleOnSearchFocus} onBlur={handleOnSearchBlur} suffix={searchSuffix} placeholder='Search for games'></Input>
                </ConfigProvider>
            </Col>
            <Col></Col>
        </Row>
    );
};
export default Navbar;