import Header from "../components/header";
import Card from "../components/cartochka";
import Footer from "../components/footer";
import Podpiska from "../components/podpiska";
import "../components/sss.css";
import Sliders from "../components/slider";
import React, { useEffect, useState } from "react";
const Main = () => {
    let [card, setCard] = useState({ data: { orders: [] } });
    useEffect(() => req_card(card, setCard), []);
    function req_card(card, setCard) {


        fetch("https://pets.сделай.site/api/pets")
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setCard(result)

            })
            .catch(error => console.log('error', error));

    }
    let cards = card.data.orders.map((order, index) => {
        return <Card data={order} />;
    })

    return (
        <div>
            <Header />
            <h2 className="text-center text-white bg-danger m-2">Найденные животные</h2>
            <Sliders />
            <h2 className="text-center text-white bg-danger m-2">Животные</h2>
            <div className=" row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
                {cards}
            </div>
            <h2 className="text-center text-white bg-danger m-2">Подписка на новости</h2>
            <Podpiska />
            <Footer />
        </div>
    );
};

export default Main;
