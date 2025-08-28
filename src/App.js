import ImageUpload from './component/imageupload';
import './App.css';
import Card from './component/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import NavbarComponent from './component/navbar';
import Home from './component/home';
import {BrowserRouter, Route , Routes} from "react-router-dom";

import SendEmail from './component/sendemail';
 


 function App() {
  return (
    <> 
     <BrowserRouter>
     <NavbarComponent/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card/:pid" element={<Card />} />
          <Route path="/email" element={<SendEmail />} />
        </Route>
      </Routes>
      </BrowserRouter>

   </> 
      );
}
 

export default App;
