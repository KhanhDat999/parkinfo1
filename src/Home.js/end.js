import styles from "./Home.module.css";
import Logo from "./imghome/funzone.svg";
import fame19 from './imghome/Frame 19.png';

function End(){


    return(

  <div>
        <div className={styles.note}>
        <div className={styles.content}>
          <img style={{height: '54px'}} src={Logo} alt=""/>
      
       <p className={styles.p} >Fun day Amusement Park, Gwangmyeong,Gyeonggi , Mar 12345 <br></br>
              For more information 09-865-5689 webmaster@funday.vn <br></br> <br></br>
             Copyright Funday Park. All rights reserved. </p> 
        <img src={fame19} alt="" className={styles.imgend} />

     </div>
     
     

 </div> 
 </div>  

    )

      
    
}


export default End;