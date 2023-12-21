import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import logg from "../img/logg.jpeg"
import { useNavigate } from 'react-router-dom';
import Cardslich from "../components/Cardslich";


const ProfileP = () => {
    let [user, setUser] = useState({});
        let [cards, setCards] = useState([]);
        let [day, setDay] = useState(0);
        let history = useNavigate();

        const load = () => {

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.token);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://pets.сделай.site/api/users", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if ('name' in result) {
                        setUser(result);

                        let a = new Date();
                        a.getDate();
                        let b = new Date(user.registrationDate);
                        let c = Math.floor((a - b) / 1000 / 3600 / 24)
                        setDay(c);
                    }
                    else {
                        history('/vxod');
                    }
                }
                )
                .catch(error => console.log('error', error));

        }
        useEffect(load, []);

        const loadCards = () => {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.token);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://pets.сделай.site/api/users/orders", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    if (result.data.orders.length > 0) {

                        setCards(result.data.orders)
                    }
                })
                .catch(error => console.log('error', error));
        }
        useEffect(loadCards, []);

        let block = useRef();
        let blocks = useRef();

        function sendPhone(e) {
            e.preventDefault();

            const forms = document.getElementById('phone')

            if (!forms.checkValidity()) {
                e.stopPropagation()
                forms.classList.add('was-validated')
                return
            }

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + localStorage.token);

            var raw = JSON.stringify(user);

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://pets.сделай.site/api/users/phone", requestOptions)
                .then(response => response.status)
                .then(result => {
                    if (result == 200) {
                        let message = 'Номер успешно изменен';
                        blocks.current.innerText = message;
                        blocks.current.style.background = "#D6D6FF"
                        blocks.current.style.color = "black";
                        blocks.current.style.border = "1px solid rgb(119, 119, 255)"
                        blocks.current.style.display = 'flex';
                    }
                })
                .catch(error => console.log('error', error));
        }

        function sendEmail(e) {
            e.preventDefault();

            const forms = document.getElementById('email')

            if (!forms.checkValidity()) {
                e.stopPropagation()
                forms.classList.add('was-validated')
                return
            }

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + localStorage.token);
            var raw = JSON.stringify(user);

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://pets.сделай.site/api/users/email", requestOptions)
                .then(response => response.status)
                .then(result => {
                    if (result == 200) {
                        let message = 'Почта успешно изменена';
                        block.current.innerText = message;
                        block.current.style.background = "#D6D6FF"
                        block.current.style.color = "black";
                        block.current.style.border = "1px solid rgb(119, 119, 255)"
                        block.current.style.display = 'flex';
                    }
                })
                .catch(error => console.log('error', error));
        }

        function vihod() {
            localStorage.clear();
            history('/vxod');
        }
    return (
        <div>
            <Header />
            <h2 className="text-center text-white bg-danger m-2">Личный кабинет</h2>
            <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img src={logg} alt="avatar" className="rounded-circle img-fluid" style={{ "width": "250px" }} />
                                        <h5 className="my-3">{user.name}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">ФИО</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{user.name}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Почта</p>


                                            </div>
                                            <div className="col-sm-9">
                                                <div className="d-flex justify-content-between">
                                                    <p className="text-muted mb-0">{user.email}</p>
                                                    <button type="button" className="btn btn-danger izmena8" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                                        Изменить данные
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Номер телефона</p>

                                            </div>
                                            <div className="col-sm-9">
                                                <div className="d-flex justify-content-between">
                                                    <p className="text-muted mb-0">{user.phone}</p>
                                                    <button type="button" className="btn btn-danger izmena8" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        Изменить данные
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Дней на сайте</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{day}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-end">
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5" className="btn btn-danger izmena6" >Выйти из аккаунта</button>
                                </div>


                                <div className="modal" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Вы уверены что хотите выйти?</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <form >
                                                <div className="modal-footer d-flex justify-content-around">
                                                    <button type="button" onClick={vihod} className="btn btn-danger izmena6" data-bs-dismiss="modal">Выйти из аккаунта</button>
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>



                                <div className="modal" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Изменение номера телефона</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form className="needs-validation flex justify-content-center" noValidate id='phone' onSubmit={sendPhone}>
                                                    <div>
                                                        <input type="text" pattern='^[\d\+]{12}$' className="form-control" required onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                                        <div className="invalid-feedback">
                                                            Введите номер телефона, используя +7 и 10 чисел
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                                        <button className="btn btn-danger" type="submit">Сохранить изменение</button>
                                                    </div>
                                                </form>
                                                <div className="alert alert-danger none" role="alert" ref={blocks}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Изменение email</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form className="needs-validation flex justify-content-center" noValidate id='email' onSubmit={sendEmail}>
                                                    <div>
                                                        <input type="email" className="form-control" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                                        <div className="invalid-feedback">
                                                            Укажите корректный email
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                                        <button className="btn btn-danger" type="submit">Сохранить изменение</button>
                                                    </div>
                                                </form>
                                                <div className="alert alert-danger none" role="alert" ref={block}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <h2 className="text-center text-white bg-danger m-2">Объявления пользователя</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
                    {cards.map((item, index) => <Cardslich data={item} key={index} />)}
                </div>
                <br />

            <Footer />
        </div>
    );
};
export default ProfileP;
