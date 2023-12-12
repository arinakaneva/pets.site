import React from "react";
const Registra = () => {
    return (
        <div style={{"minHeight":"70vh"}}>
            <form className="w-50 m-auto p-5" style={{ "min-width": "300px" }}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Имя</label>
                    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Номер телефона</label>
                    <input type="tel" className="form-control" id="exampleInputtel" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Почта</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Повторите пароль</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Согласие на обработку персональных данных</label>
                </div>
                <button type="submit" className="btn btn-danger">Зарегистрироваться</button>
            </form>
        </div>
    );
};
export default Registra;