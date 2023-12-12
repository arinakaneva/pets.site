import Dobavlenie from './pages/dobavlenie';
import Registr from './pages/registr';
import Vxod from './pages/vxod';
import Main from './pages/main'
import Poisk from './pages/poisk';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/vxod'} element={<Vxod/>}/>
                <Route path={'/registr'} element={<Registr/>}/>
                <Route path={'/dobavlenie'} element={<Dobavlenie/>}/>
                <Route path={'/poisk'} element={<Poisk/>}/>
            </Routes>
    </div>
  );
}

export default App;