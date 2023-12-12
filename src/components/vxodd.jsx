import React from "react";
const Vxodd = () => {
    return (
        <div style={{"minHeight":"70vh"}}>
            <form className="w-50 m-auto p-5" style={{"minWidth": "300px"}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Почта</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-danger">Войти</button>
            </form>
        </div>
    );
};
export default Vxodd;