import Navbar from "./component/Navbar"
import Ragister from "./component/Ragister";
import Edit from "./component/Edit";
import Detail from "./component/Detail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
   <Router>
    <Navbar/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/Ragister' element={<Ragister/>}/>
    <Route path='/Edit/:id' element={<Edit/>}/>
    <Route path='/Detail/:id' element={<Detail/>}/>



    </Routes>
   </Router>
     
    </div>
  );
}

export default App;
