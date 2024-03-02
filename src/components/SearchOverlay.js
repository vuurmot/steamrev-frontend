import React, { useEffect, useState } from 'react';
import { Avatar, List } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
function SearchOverlay() {

    const SearchOverlayWrapper = styled.div`
position: fixed; /* Sit on top of the page content */
display: block; /* Hidden by default */
width: 100%; /* Full width (cover the whole page) */
height: 100%; /* Full height (cover the whole page) */

background-color: rgba(0,0,0,0.5); /* Black background with opacity */
z-index: 2; /* Specify a stack order in case you're using a different order for other elements */

`;
    useEffect(() => {
        axios.get("https://localhost:7294/api/games").then((response) => {
            setGameData(response.data);
        });
    }, [])

    const [gameData, setGameData] = useState([]);
    return (
        <SearchOverlayWrapper>
            <List
                itemLayout="horizontal"
                dataSource={gameData}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.header_image} />}
                            description={<a href={`/games/${item.appid}`} onMouseDown={ev => ev.preventDefault()} >{item.name}</a>}
                        />
                    </List.Item>
                )}
            />
        </SearchOverlayWrapper>
    );
}
export default SearchOverlay;