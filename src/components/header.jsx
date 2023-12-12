import React from "react";
import photo from '../img/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
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
                                <Link to={'/vxod'} className="nav-link">Личный кабинет</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/registr'} className="nav-link">Регистрация</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/dobavlenie'} className="nav-link" >Добавление животного</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/poisk'} className="nav-link">Поиск</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Header;