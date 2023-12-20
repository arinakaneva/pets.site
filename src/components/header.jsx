import photo from '../img/logo.png'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import QuickSearch from '../components/fastpoisk'


const Header = () => {
    let [card, setCard]=useState([]);

let [query, setQuery]=useState('');

const send=()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/search?query="+query, requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)


            let data=result.data.orders.map((item)=>item.description)
            let set=new Set(data)
            let uniq=Array.from(set)

            data=uniq.map((value, index)=><option value={value} key={value}></option>)


            setCard(data)
            console.log(card)
        })



        .catch(error => console.log('error', error));
}

const search = (e) => {
    setQuery(e.target.value)

    if (query.length>2) setTimeout(send, 1000);
}

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" >
                        <img src={photo} alt="Bootstrap" width="70" height="70" /> Главная
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/vxod'} className="nav-link">Вход</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/registr'} className="nav-link">Регистрация</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/cabinlich'} className="nav-link">Личный кабинет</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/dobavlenie'} className="nav-link" >Добавление животного</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/poisk'} className="nav-link">Поиск</Link>
                            </li>
                        </ul>
                        <QuickSearch/>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Header;