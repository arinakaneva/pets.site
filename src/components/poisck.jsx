import React from "react";
const Poisck = () => {
    return (
        <div style={{ "minHeight": "70vh" }}>
            <form className="w-50 m-auto p-5" style={{"min-width": "300px"}}>
                <select className="form-select" aria-label="Выберете район">
                    <option selected>Откройте это меню выбора района</option>
                    <option value="1">Центральный</option>
                    <option value="2">Приморский</option>
                    <option value="3">Выборгский</option>
                    <option value="4">Калининский</option>
                    <option value="5">Красногвардейский</option>
                    <option value="6">Петроградский</option>
                    <option value="7">Василеостровский</option>
                    <option value="8">Адмиралтейский</option>
                    <option value="9">Московский</option>
                    <option value="10">Невский</option>
                    <option value="11">Фрунзенский</option>
                    <option value="12">Кировский</option>
                </select>
                <br />
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Введите вид животного</label>
                    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-danger">Найти</button>
            </form>
        </div>
    );
};
export default Poisck;