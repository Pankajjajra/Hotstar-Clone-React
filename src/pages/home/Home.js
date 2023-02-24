import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import New from "../../components/New";
import Original from "../../components/Original";
import Recommended from "../../components/Recommended";
import Trending from "../../components/Trending";
import Viewers from "../../components/Viewers";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-full w-full bg-home-bg bg-cover bg-fixed bg-center bg-no-repeat px-5">
                <Header />
                <Viewers />
                <Recommended />
                <New />
                <Original />
                <Trending />
            </div>
        </div>
    );
};

export default Home;
