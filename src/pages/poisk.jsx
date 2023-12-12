import Header from "../components/header";
import Footer from "../components/footer";
import "../components/sss.css";
import Poisck from "../components/poisck";


function Poisk() {
    return (
        <div>
            <Header />
            <h1 className="text-center text-white bg-danger m-1">Поиск</h1>
            <Poisck />
            <Footer />
        </div>
    );
}

export default Poisk;