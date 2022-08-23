import {Routes , Route , Link } from 'react-router-dom'
// import { useState } from 'react';
import styles from "./Home.module.css";
import Logo from "./imghome/funzone.svg";
import React from 'react';
import logomenu from './imghome/Very-Basic-Menu-icon.png';


function Nav() {





    function logomenu2(){
                const $ = document.getElementById('ad');
                if( $.style.display = 'none'){
                    $.style.display = 'block'
                    document.getElementById('logomenu').style.display = 'none';
                   
                  
                  }
         
            };
            function lonmemay(){
                document.getElementById('ad').style.display = 'none';
                document.getElementById('logomenu').style.display = 'block';
            }
    return(

         
         <div style={{width: '100%' , height:'100%'}} >  
             <div className={styles.head}> 
                <div><Link to="/" className={styles.khanhdat1} > <img style={{height: '40px' , marginRight: '70px' ,  marginLeft: '80px'}}  src={Logo} className={styles.khanhdat.funday }/></Link></div> 
                    <div className={styles.EXPERIENCE}>
                    <Link  to="/Experience" className={styles.EXPERIENCE1 }><div className={styles.khanhdat}  >EXPERIENCE</div> </Link>
                       <div className={styles.EXPERIENCEmenu}>
                           <Link  to="/dragonpark" className={styles.khanhdat}><div >Dragon Park</div></Link>
                           <Link to="/waterpark" className={styles.khanhdat} ><div > Water Park</div></Link>
                           <Link  to="/mysterioushills" className={styles.khanhdat} ><div>Mysterious Hills</div></Link>
                           <Link to="/oldquarter" className={styles.khanhdat} ><div >Old Quarter</div></Link>
                           <Link to="/Food&Shopping" className={styles.khanhdat} ><div >Food & Shopping</div></Link>
                           </div>
                   </div>
                   <div className={styles.EXPERIENCE}>
                       <div  style={{marginTop: '0px'}} > <Link className={styles.khanhdat} to="/leisuredinning">LEISURE & DINNING</Link></div>
                       <div className={styles.EXPERIENCEmenu}>
                           
                       </div>
                    </div>
                   <div><Link className={styles.khanhdat} to="/character">PARKS CHARACTERS</Link></div>
                   <div><Link className={styles.khanhdat} to="/whatapp">WHATS UP</Link></div>

                   <div><Link className={styles.khanhdat} to="/opportunity">OPPORTUNITIES</Link></div>
                    <div ><Link className={styles.khanhdat}  style={{marginRight: "100px"}}  to="/contact">CONTACT</Link></div> 
  {/* mobile */}                  
                     <div className={styles.mobile}>
                        <img onClick={logomenu2} id='logomenu' src={logomenu} height='50px'className={styles.img2} />
                        
                        <div className={styles.EXPERIENCE}>
                            <div id='ad'  className={styles.ad} >
                                <img src={logomenu} onClick={lonmemay}  height='50px'className={styles.img3} />
                    <div   className={styles.EXPERIENCE1 }><Link className={styles.menumobile} to="/experience" >EXPERIENCE</Link> </div>
                       {/* <div className={styles.EXPERIENCEmenu}>
                           <Link className={styles.menumobile} to="/dragonpark"><div style={{paddingTop: "40px"}}>Dragon Park</div></Link>
                           <Link className={styles.menumobile} to="/waterpark"><div > Water Park</div></Link>
                           <Link className={styles.menumobile} to="/mysterioushills"><div>Mysterious Hills</div></Link>
                           <Link className={styles.menumobile} to="/oldquarter"><div>Old Quarter</div></Link>
                           <Link className={styles.menumobile} to="/Food&Shopping"><div>Food & Shopping</div></Link>
                           </div> */}
                 
                   <div className={styles.EXPERIENCE}>
                       <div  style={{marginTop: '0px'}} > <Link className={styles.menumobile} to="/leisuredinning">LEISURE & DINNING</Link></div>
                       <div className={styles.EXPERIENCEmenu}>
                          

                       </div>  <div><Link className={styles.menumobile} to="/character">PARKS CHARACTERS</Link></div>
                   <div><Link className={styles.menumobile} to="/whatapp">WHATS UP</Link></div>
                   
                   <div><Link className={styles.menumobile} to="/opportunity">OPPORTUNITIES</Link></div>
                    <div ><Link className={styles.menumobile}  style={{marginRight: "100px"}}  to="/Contact">CONTACT</Link></div>
                    </div></div></div>
                  


                    </div>
                

     
               </div  > <hr></hr>
              
           
           
                </div  >
                 
               
                 
    );
}

export default Nav;