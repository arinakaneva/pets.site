import Header from "../components/header";
import Footer from "../components/footer";
import "../components/sss.css";
import Vxodd from "../components/vxodd";


function Vxod() {
    return (
        <div>
            <Header />
            <h1 className="text-center text-white bg-danger m-1">Вход</h1>
            <Vxodd/>
            <Footer />
        </div>
    );
}

export default Vxod;