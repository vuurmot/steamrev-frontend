import React, { useState } from 'react';
import { Layout, Flex } from 'antd';
import Footnote from './components/Footnote';
import Navbar from './components/Navbar';
import About from './components/AboutPage/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import GameDetails from './components/GameDetailsPage/GameDetails';
import HomePage from './components/HomePage/HomePage';
import SearchOverlay from './components/SearchOverlay';
const { Header, Footer, Content } = Layout;
const headerStyle = {
  color: '#fff',
  padding: 0,
  backgroundColor: '#000000',
};
const contentStyle = {
  color: '#fff',
  // backgroundColor: '#20232e',
  backgroundColor: '#161920',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#161920',
};

const App = () => {
  const [shouldShowSearchOverlay, setShouldShowSearchOverlay] = useState(false);

  const handleOnSearchFocus = () => { setShouldShowSearchOverlay(true) }
  const handleOnSearchBlur = () => { setShouldShowSearchOverlay(false) }
  return (
    <BrowserRouter>
      <Flex gap="middle" wrap="wrap">
        <Layout>
          <Header style={headerStyle}>
            <Navbar handleOnSearchFocus={handleOnSearchFocus} handleOnSearchBlur={handleOnSearchBlur} />
          </Header>
          <Content style={contentStyle}>
            {shouldShowSearchOverlay ? (<SearchOverlay />) : ""}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/games/:id" element={<GameDetails />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Content>
          <Footer style={footerStyle}>
            <Footnote />
          </Footer>
        </Layout>

      </Flex>

    </BrowserRouter>



  );
}
export default App;