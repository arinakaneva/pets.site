import Header from "../components/header";
import Footer from "../components/footer";
import "../components/sss.css";
import Registra from "../components/registra";



function Registr() {
    return (
        <div>
            <Header />
            <h1 class="text-center text-white bg-danger m-1">Регистрация</h1>
            <Registra />
            <Footer />
        </div>
    );
}

export default Registr;