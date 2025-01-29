import React from "react";
import NavBarPage from "../components/NavBar/NavBar";
import HomeHeader from "../components/Home/Header/HomeHeader";
import Slider from "../components/Home/Carousel/Carousel"
import AboutUs from "../components/Home/AboutUs/AboutUs";
import Comments from "../components/Home/Comments/Comments";
import Branches from "../components/Home/Branches/Branches";
import Benefit from "../components/Home/Benefit/Benefit";//esta dado problemas en modo celular
import Footer from "../components/Footer/Footer";


const HomePage = () => {
    return (
        <div>
       <NavBarPage />
       <HomeHeader />
       <AboutUs />
       <Branches />
       <Slider />
       <Comments />
        <Benefit />
       <Footer />
       
        </div>
    );
    }
export default HomePage;