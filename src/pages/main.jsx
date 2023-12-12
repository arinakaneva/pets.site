import Header from "../components/header";
import Slider from "../components/slaider";
import Card from "../components/cartochka";
import Footer from "../components/footer";
import Podpiska from "../components/podpiska";
import "../components/sss.css";


function Main() {
    return (
        <div>
            <Header />
            <h2 className="text-center text-white bg-danger m-2">Найденные животные</h2>
            <div id="carouselExampleCaptions" className="carousel slide w-50 m-auto">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <Slider />
                    <Slider />
                    <Slider />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
            <h2 className="text-center text-white bg-danger m-2">Животные</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <Card />
                <Card />
                <Card />
            </div>
            <h2 className="text-center text-white bg-danger m-2">Подписка на новости</h2>
            <Podpiska />
            <Footer />
        </div>
    );
}

export default Main;
