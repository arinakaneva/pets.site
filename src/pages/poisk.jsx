import Header from "../components/header";
import Footer from "../components/footer";
import "../components/sss.css";
import React, { useRef, useState } from 'react';
import Search from "../components/search";

function Poisk() {


    return (
        <div>
            <Header />
            <h1 className="text-center text-white bg-danger m-1">Поиск</h1>
           <Search/>
            <br />
            <Footer />
        </div>
    );
}

export default Poisk;