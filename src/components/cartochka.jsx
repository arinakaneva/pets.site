import React from "react";
import photo2 from '../img/rabbit.jpg'
const Card = () => {
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={photo2} className="card-img-top" alt="кролик" />
                    <div className="card-body">
                        <h5 className="card-title">Кролик</h5>
                        <p className="card-text">Нашли кролика в приморском районе.Серый Кролик с розовым бантиком</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;