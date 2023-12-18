import Header from "../components/header";
import Footer from "../components/footer";
import "../components/sss.css";
import React, { useRef, useState } from 'react';

const Vxodd = () => {
    let [user, setUser] = useState();
    let [token, setToken] = useState();

    let blocks = useRef();

    function sign(e) {
        e.preventDefault();

        const forms = document.getElementById('forma')

        if (!forms.checkValidity()) {
            e.stopPropagation()
            forms.classList.add('was-validated')
            return
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(user);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                if ('data' in result) {
                    localStorage.token = result.data.token
                    setToken(result.data.token)
                    let message = 'Вход прошел успешно!';
                    blocks.current.innerText = message;
                    blocks.current.style.background = "#34C924"
                    blocks.current.style.color = "black";
                    blocks.current.style.border = "1px solid rgb(19, 136, 8)"
                    blocks.current.style.display = 'flex';
                }
                else {
                    let message = 'Вы ввели неправильный логин или пароль!';
                    blocks.current.innerText = message;
                    blocks.current.style.background = '#C76864';
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
            <h2 className="text-center text-white bg-danger m-2">Вход</h2>
            <div style={{"minHeight":"70vh"}}>
                <form className="contei1 w-50 m-auto" noValidate onSubmit={sign} id='forma'>
                    <label htmlFor="validationCustom01" className="form-label">Email</label>
                    <input type="email" className="form-control" id="validationCustom01" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <div className="invalid-feedback feed">
                        Введите правильный Mail
                    </div>
                    <label htmlFor="validationCustom02" className="form-label">Пароль</label>
                    <input type="password" pattern='^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{7,}$' className="form-control" id="validationCustom02" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <div className="invalid-feedback feed">
                        Латинские буквы обязательно одна заглавная, строчная и цифра, минимум 7 символов
                    </div>
                    <div>
                        <br />
                        <button className="btn btn-danger" type="submit">Войти</button>
                    </div>
                </form>
                <div className="alert alert-danger w-50 asda mt-3 m-auto" style={{ "display": "none" }} role="alert" ref={blocks}></div>
            </div>
            <Footer />

        </div>
    );
};

export default Vxodd;