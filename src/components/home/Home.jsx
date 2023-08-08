import React from 'react';
import Banner from './Banner';
import ShopCategory from './ShopCategory';
import ToyGallery from './ToyGallery';
import About from './About';
import AllCategory from './AllCategory';
import useTitle from '../../hooks/Title';
import Trending from './Trending';
import Featured from './Featured';

const Home = () => {
    useTitle("Home")
    return (
        <>
        <Banner></Banner>
        <ToyGallery></ToyGallery>
        <ShopCategory></ShopCategory>
        <About></About>
        <Trending />
        <AllCategory></AllCategory>
        <Featured />
        </>
    );
};

export default Home;