import React from "react";
import photo1 from '../img/dog.jpg'
const Slider = () => {
    return (
        <div>
            <div className="carousel-item active">
                <img src={photo1} className="d-block w-100" alt="dog" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Найдена собака</h5>
                    <p>Собаку нашли в Приморском районе</p>
                </div>
            </div>
        </div>
    );
};
export default Slider;