import styles from './ld.module.css';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img567 from './img/567.png';
import img090 from './img/Rectangle 090.png';
import img110 from './img/Rectangle 110.png';
import img149 from './img/Rectangle 149.png';
import img568 from './img/Rectangle 568.png';
import img1190 from './img/Rectangle 1190.png';
import img1401 from './img/Rectangle 1401.png';
import img1402 from './img/Rectangle 1402.png';
import img1490 from './img/Rectangle 14900.png';
import Vector from './img/Vector.png';
import vector1 from './img/vector1.png';



function Ld(){
  

    return (
    <div>
<div>

<div className={styles.item}>
          
          <h1>ATIMA ICE CREAM</h1>
            <div className={styles.items}>
                  <div className={styles.icename}><img src={img090} alt="" />
                 <p className={styles.fonsize} >OREO</p><hr className={styles.hrs}></hr>
                 <p>This is an item on your menu. Give your item a brief description.
                 </p> 
                 <p>$9</p>
                    </div>
                    <div className={styles.icename}><img src={img1402} alt="" />
                      <p className={styles.fonsize} >CHOCOLATE & SEA SALT</p><hr className={styles.hrs}></hr>
                      <p>This is an item on your menu. Give your item a brief description.
                      </p> 
                      <p>$9</p>
                         </div>
                         <div className={styles.icename}><img src={img568} alt="" />
                          <p className={styles.fonsize} > CHERRY CHEESECAKE </p><hr className={styles.hrs}></hr>
                          <p>This is an item on your menu. Give your item a brief description.
                          </p> 
                          <p>$9</p>
                             </div>
                             <div className={styles.icename}><img src={img1190} alt="" />
                              <p className={styles.fonsize} >PITACHIO</p><hr className={styles.hrs}></hr>
                              <p>This is an item on your menu. Give your item a brief description.
                              </p> 
                              <p>$9</p>
                                 </div>
            </div >
            <div className={styles.items} style={{minHeight: '660px' }}>
              <div className={styles.icename}><img src={img110} alt="" />
             <p className={styles.fonsize} >SALTED CARAMEL SOY
          </p><hr className={styles.hrs}></hr>
             <p>This is an item on your menu. Give your item a brief description.
             </p> 
             <p>$9</p>
           
                </div>
                <div className={styles.icename}><img src={img149}alt="" />
                  <p className={styles.fonsize} >BRAMBLEBERRY SORBET
                  </p><hr className={styles.hrs}></hr>
                  <p>This is an item on your menu. Give your item a brief description.
                  </p> 
                  <p>$9</p>
                
                     </div>
                     <div className={styles.icename}><img src={img567} alt="" />
                      <p className={styles.fonsize} >HAZELNUT & COOKIES
                      </p><hr className={styles.hrs}></hr>
                      <p>This is an item on your menu. Give your item a brief description.
                      </p> 
                      <p>$9</p>
                    
                         </div>
                         <div className={styles.icename}><img src={img1490} alt="" />
                          <p className={styles.fonsize} >VANILLA STRABERRY</p><hr className={styles.hrs}></hr>
                          <p>This is an item on your menu. Give your item a brief description.
                          </p> 
                          <p>$9</p>
                        
                             </div>
  
        </div><br></br>
            <div  > <hr className={styles.hrss}></hr></div>
             <div > <h1 style={{color:'#4CAEEA' }}>OTHERS</h1></div>
             <div style={{paddingTop: '130px' , justifyContent: 'space-around', display: 'flex'}}>
              <div className={styles.whatappelement}>
                  <img src={img4} alt="" />
                  <div className={styles.khanhdat} >
                  <h3> Azzurra di Capri</h3>
                   <p>Serving delious chicken all-day-long! This is the perfect pit stop for the chicken lover in</p>
                   <hr className={styles.new1}></hr></div>
                   <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                   <img src={vector1} alt="" /></div>



                  <div className={styles.whatappelement}>
                   <img src={img5} alt="" />
                  <div  className={styles.khanhdat}>
                    <h3> Kinopio’s Cafe</h3>
                     <p>The social messaging phenomenon has completely transformed the way people...</p>
                     <hr className={styles.new1}></hr><br></br>
                     <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                     <img src={vector1} alt="" /></div>
  
                
              </div>
               <div className={styles.whatappelement}>
              <img src={img6} alt="" />
                  <div className={styles.khanhdat}>
                     <h3> Happiness Cafe</h3>
                      <p>The social messaging phenomenon has completely transformed the way people...</p>
                      <hr className={styles.new1}></hr><br></br>
                      <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                      <img src={vector1} alt="" /></div>
              </div>
             
             
                   
               </div>
          
          
          </div>
  
  
        </div>
       <div className={styles.img}><img src={img1401} alt="" /></div>
       
       <div className={styles.backcolor}></div>





</div>






  
    )
}

export default Ld;