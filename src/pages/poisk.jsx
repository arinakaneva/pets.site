import Header from "../components/header";
import Footer from "../components/footer";
import "../components/sss.css";
import React, { useRef, useState } from 'react';
import Cards from "../components/cartochka";

function Poisk() {
    let [zap, setZap] = useState({});
    let [cards, setCards] = useState([]);
    let blocks = useRef();

    function skai(e) {
        e.preventDefault();

        const forms = document.getElementById('ishi')

        if (!forms.checkValidity()) {
            e.stopPropagation()
            forms.classList.add('was-validated')
            return
        }

        var myHeaders = new Headers();

        var zapOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/search/order?district=" + zap.district + " &kind=" + zap.kind, zapOptions)
            .then(response => response.json())
            .then(result => {
                if (result.data.orders.length > 0) {
                    setCards(result.data.orders);
                    blocks.current.style.display = 'none';

                }
                else {
                    let message = 'Таких объявлений нет';
                    blocks.current.innerText = message;
                    blocks.current.style.background = "#C76864"
                    blocks.current.style.color = "black";
                    blocks.current.style.border = "1px solid #801818"
                    blocks.current.style.display = 'flex';
                }
            })
            .catch(error => console.log('error', error));

    }

    return (
        <div>
            <Header />
            <h1 className="text-center text-white bg-danger m-1">Поиск</h1>
            <div style={{ "minHeight": "64vh" }}>
                <form noValidate style={{ "margin": "30px auto 0 auto", "minWidth": "300px" }} onSubmit={skai} id='ishi'>
                    <div>
                        <div className="w-50 m-auto " >
                            <form className="d-flex but" role="search">
                                <input className="form-control me-2" type="text" placeholder="Введите вид животного" aria-label="Search" onChange={(e) => setZap({ ...zap, kind: e.target.value })} />
                            </form>
                        </div>
                        <pre></pre>
                        <div className="w-50 m-auto " >
                            <form className="d-flex but" role="search">
                                <input className="form-control me-2" type="text" placeholder="Введите район" aria-label="Search" onChange={(e) => setZap({ ...zap, district: e.target.value })} />
                            </form>
                        </div>
                        <pre></pre>
                        <div className="w-50 m-auto " >
                            <div className="d-flex justify-content-center align-items-center" >
                                <button type="submit" className="btn btn-danger">Найти</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
                    {cards.map((item, index) => <Cards data={item} key={index} />)}
                </div>
                <div className="alert alert-danger w-50 asda mt-3 m-auto" style={{ "display": "none" }} role="alert" ref={blocks}></div>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Poisk;