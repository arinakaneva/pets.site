import React from "react";

function ProfileInfo() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Номер телефона</h4>
                    <p>+7 123 456 7890</p>
                    <button className="btn btn-danger">Изменить</button>
                </div>
                <div className="col-md-6">
                    <h4>E-mail</h4>
                    <p>example@example.com</p>
                    <button className="btn btn-danger">Изменить</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Количество добавленных объявлений</h4>
                    <p>3</p>
                </div>
                <div className="col-md-6">
                    <h4>Количество животных, которые вернулись к хозяевам</h4>
                    <p>5</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Дата регистрации</h4>
                    <p>01.01.2020</p>
                </div>
                <div className="col-md-6">
                    <h4>Количество дней, прошедших с момента регистрации</h4>
                    <p>180</p>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;