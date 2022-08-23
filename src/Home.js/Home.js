import { Routes , Route , Link } from 'react-router-dom';
import { useState , useRef , useEffect} from 'react';
import styles from "./Home.module.css";
// import Logo from "./imghome/funzone.svg";
import Experience from '../Experience/Experience';
// import logomenu from './imghome/Very-Basic-Menu-icon.png';
import imghome from './imghome/imghome1.png';
import React from 'react';

import img9 from './imghome/imghome9.jpg';
import img8 from './imghome/imghome8.jpg';
import img10 from './imghome/imghom10.jpg';
import imgvecto from './imghome/Vector.png';
import imgvecto1 from './imghome/vector1.png';
import fame19 from './imghome/Frame 19.png';
import imghome1 from './imghome/imghome.png';
import imghome7 from './imghome/Carnival of the year.jpg';
import imghome6 from './imghome/Dragon Ride upgrade.jpg'
import imghome5 from './imghome/Camping Night.jpg'
import Weather from './weather';
import Muiten from './imghome/muiten.png'
import Hot from './imghome/hot.png'
import imghome34 from './imghome/image 34.png'




function Home() {

   
   let index = useRef(1);
  


   let img = [(imghome),(imghome1),(imghome7),(imghome6),(imghome5)];
  const [ imgs , setimgs] = useState(imghome);
    const funcimg = useEffect(()=>{
     setInterval(()=>{
  
    setimgs (img[index.current] );
    index.current++;
  
  
    if(index.current == 5){
          index.current = 0;
      }
      
  },3000);

  },[])

  const hansom =()=>{
    setimgs (img[index.current] );
    index.current++;
   
    if(index.current == 5){
      index.current = 0;
  }

  }
  const hansom1 =()=>{
    setimgs (img[index.current] );
    index.current--;
   
    if(index.current == 0){
      index.current = 4;
  }

  }
 
  

      return (
      
       <div >
         
      
        
        
          <div className={styles.img}> <img id="img" onClick={funcimg} className={styles.imghome} src={imgs} alt=""/></div>
       <img className={styles.muitenphai} src={Muiten}  onClick={hansom1} />  <img src={Muiten}  className={styles.muitentrai} onClick={hansom} />
         <div><h2 className={styles.h2}  >READY FOR SOME FAMILY FUN?</h2></div>
         <div className={styles.body}>

           < Weather/>
          
     
     <div className={styles.youtube} style={{float: 'right', width: '745px',height: '400px' ,}}>
     <img  src={imghome34}  />
    </div><br></br><br></br>
    <div>
       
     </div>
     </div>
    
              <h2>WHAT’S ON</h2> 

              <div><div className={styles.abc} >
           
           
            <div className={styles.whatappelement}>

                <img className={styles.img10} src={img8} style={{width: '350px', height: '210px'}} />
                <div className={styles.text} >
                <h3> Summer is here</h3>
                <p>The social messaging phenomenon has completely transformed the way people...</p>
                <hr style={{width :'300px'}} className={styles.new1}  /><br></br>
                <img src={imgvecto} alt="" /> &nbsp; 100 &nbsp;
                <img src={imgvecto1} alt="" />

                </div>
  
            </div> 
            <div className={styles.whatappelement}>

<img className={styles.img10} src={img9} style={{width: '350px', height: '210px'}} />
<div className={styles.text} >
<h3> Seeks to take on Fun Zone</h3>
<p>The new world tour takes you to all park and the sights from the Ferris Wheel</p>
<hr style={{width :'300px'}} className={styles.new1}  /><br></br>
<img src={imgvecto} alt="" /> &nbsp; 100 &nbsp;
<img src={imgvecto1} alt="" />

</div>

</div> 
<div className={styles.whatappelement}>

<img className={styles.img10} src={img10} style={{width: '350px', height: '210px'}} />
<div className={styles.text} >
<h3> Ferris wheel</h3>
<p>The classic of classic rides, enjoy the ride on the sights from the Ferris Wheel .</p>
<hr style={{width :'300px'}} className={styles.new1}  /><br></br>
<img src={imgvecto} alt="" /> &nbsp; 100 &nbsp;
<img src={imgvecto1} alt="" />

</div>

</div> 
  
                
         </div><br></br><br></br>
        
     </div>  

    

    </div>   
     
    

       
      )
    
  };
  
  export default Home;
 