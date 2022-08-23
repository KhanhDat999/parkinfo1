import { Routes , Route , Link } from 'react-router-dom';
import Home from "./Home.js/Home";
import React from 'react';
import './Home.js/Home.module.css';
import Experience from "./Experience/Experience";
import Nav from "./Home.js/Nav";
import Ld from './Ld/ld';
import End from './Home.js/end'
import Contact from './contact/Contact';
import Whatup from './Whatsup/whatup';
import Opportunity from './opportuni/opportuniti';
import Parkcharacter from './Parkcharacter/Parkcharacter';

// import styles from "./home/Home.js/Home.module.css";
// import Logo from "./img/funzone.svg";
// import logomenu from './img/Very-Basic-Menu-icon.png';







function App(){




return(
    <div >
       
            <Nav />

            < Routes > 

             <Route path='/' element={<Home/>} />
             <Route path='/Experience' element={<Experience />} />
             <Route path='/leisuredinning' element={<Ld />} />
             <Route path='/contact' element={<Contact />} />
             <Route path='/whatapp' element={<Whatup />} />
             <Route path='/opportunity' element={<Opportunity />} />
             <Route path='/character' element={<Parkcharacter />} />
            





        </Routes>
    <End/>

</div  >

 
 
)
}


export default App;