import React from "react";
const Dobav = () => {
    return (
        <form className="w-50 m-auto p-5" style={{"min-width": "300px"}}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Номер телефона</label>
                <input type="tel" className="form-control" id="exampleInputtel" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Почта</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Введите вид найденного животного</label>
                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Выберете фото</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Выберете фото</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Выберете фото</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mb-3">
                <label fohtmlForr="exampleFormControlTextarea1" className="form-label">Введите описание животного</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
            </div>
            <button type="submit" className="btn btn-danger">Опубликовать</button>

        </form>
    );
};
export default Dobav;