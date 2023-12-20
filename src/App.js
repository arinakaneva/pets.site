import Dobavlenie from './pages/dobavlenie';
import Registr from './pages/registr';
import Vxod from './pages/vxod';
import Main from './pages/main'
import Poisk from './pages/poisk';
import Cabinlich from './pages/cabinlich';
import InfCard from './pages/infcard';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/vxod'} element={<Vxod/>}/>
                <Route path={'/registr'} element={<Registr/>}/>
                <Route path={'/cabinlich'} element={<Cabinlich/>}/>
                <Route path={'/dobavlenie'} element={<Dobavlenie/>}/>
                <Route path={'/poisk'} element={<Poisk/>}/>
                <Route path={'/infcard'} element={<InfCard/>}/>
            </Routes>
    </div>
  );
}

export default App;
