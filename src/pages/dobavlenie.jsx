import Header from "../components/header";
import Footer from "../components/footer";
import "../components/sss.css";
import Dobav from "../components/dobav";


function Dobavlenie() {
    return (
        <div>
            <Header />
            <h1 className="text-center text-white bg-danger m-1">Добавить карточку животного</h1>
            <Dobav />
            <Footer />
        </div>
    );
}

export default Dobavlenie;