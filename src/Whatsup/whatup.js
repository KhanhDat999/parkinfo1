import styles from './whatup.module.css'
import Avengers from './img/Avengers Campus.jpg';
import Camping from './img/Camping Night.jpg';
import Carnival from './img/Carnival of the year.jpg';
import Dragon from './img/Dragon Ride upgrade.jpg';
import Fathers from './img/Fathers Day Weekend.jpg';
import Kids from './img/Kids Weekend.jpg';
import imMothersg from './img/Mothers Day Weekend.jpg';
import Night from './img/Night of Disney World.jpg';
import Opening from './img/Opening Day.jpg';
import Teacher from './img/Teacher Appreciation Weekend.jpg';
import Vector from './img/Vector.png';
import vector1 from './img/vector1.png';

function Whatup(){
 

  return(
<div>

  <div className={styles.color}>
 </div>
<div>



  <div className={styles.body} >
     <div className={styles.whatsapp}>
      <div className={styles.flex}  ><img className={styles.khanhdat}  src={Night} alt="" />

       </div>
       <div className={styles.text}>
      <h2 style={{color:'#000000'}}> Night of Disney World</h2>
        <p style={{marginTop: '30px', marginBottom: '30px',color:'#000000'}}> 20:00 PM June 24, 2022 We have invited many Disney friend such ass Mickey Mouse, Minnie, Donald Duck ... to play with you and many more
        </p>
       <hr className={styles.new1}></hr> <br></br>
        <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
        <img src={vector1} alt="" />
      </div>
     </div><br></br>

        <div >
          <div style={{ justifyContent: 'space-around', display: 'flex'}}>
           
           
              <div className={styles.whatappelement}>
                  <img className={styles.wh} src={Camping} alt="" />
                  <div className={styles.khanhdat1} >
                  <h3 style={{color:'#000000'}}> Camping Night  </h3>
                   <p style={{color:'#000000'}}>20:00 PM June 23, 2022 Prepare for the outdoor camping with your family and friends
                  </p>
                  <hr className={styles.new1}></hr> <br></br>
                  <img src={Vector} alt="" />   &nbsp; 100 &nbsp;
                  <img src={vector1} alt="" /></div>
                 
              </div>
              <div className={styles.whatappelement}>
                  <img className={styles.wh} src={Carnival} alt="" />
                  <div  className={styles.khanhdat1}>
                    <h3 style={{color:'#000000'}} > Carnival of the year</h3>
                     <p style={{color:'#000000'}} >19:30 PM June 23, 2022 We have the biggest carnival you must join
                    </p>
                    <hr className={styles.new1}></hr> <br></br>
                    <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                    <img src={vector1} alt="" /></div>

                
              </div>
              <div className={styles.whatappelement}>
              <img className={styles.wh} src={Dragon} alt="" />
              <div  className={styles.khanhdat1}>
                    <h3 style={{color:'#000000'}}> Dragon Ride upgrade</h3>
                     <p style={{color:'#000000'}}>From 20:00 PM June 20, 2022 Sorry for your experience with the game, we currently...
                    </p>
                    <hr className={styles.new1}></hr> <br></br>
                    <img src={Vector} alt="" /> &nbsp; 100 &nbsp;
                    <img src={vector1} alt="" /></div>
              
              </div><br></br>


          </div>
         <div>
             <div >

             </div>
             <div style={{ justifyContent: 'space-around', display: 'flex'}}>
           
           
                <div className={styles.whatappelement}>
                <img className={styles.wh} src={Avengers} alt="" />
                <div  className={styles.khanhdat1}>
                    <h3 style={{color:'#000000'}}> Avengers Campus  </h3>
                     <p style={{color:'#000000'}}> June 18 & 19, 2022Team up with the Avengers at a campus they’ve created to ...               </p>
                       <hr className={styles.new1}></hr> <br></br>
                     <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                    <img src={vector1} alt="" /></div>
                   
                </div>
                 <div className={styles.whatappelement}>
                 <img className={styles.wh} src={Fathers} alt="" />
                   <div  className={styles.khanhdat1}>
                      <h3 style={{color:'#000000'}}> Father's Day Weekend
                      </h3>
                       <p style={{color:'#000000'}}> June 18 & 19, 2022 - Celebrate Father's Day. When a family brings Dad to the park and ...</p>
                         <hr className={styles.new1}></hr> <br></br>
                       <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                      <img src={vector1} alt="" /></div>
  
                  
                </div>
                 <div className={styles.whatappelement}>
                 <img className={styles.wh} src={Teacher} alt="" />
                  <div  className={styles.khanhdat1}>
                      <h3 style={{color:'#000000'}}>Teacher Appreciation Weekend</h3>
                       <p style={{color:'#000000'}}>June 4 & 5, 2022 - All teachers and school personnel receive FREE admission into the ...
                      </p>
                         <hr className={styles.new1}></hr> <br></br>
                       <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                      <img src={vector1} alt="" /></div>
                    
                </div><br></br>
  
            </div>
            <div>
            <div style={{ justifyContent: 'space-around', display: 'flex'}}>
           
           
                     <div className={styles.whatappelement}>
                     <img className={styles.wh} src={Kids} alt="" />
                       <div  className={styles.khanhdat1}>
                        <h3 style={{color:'#000000'}}>Kids Weekend
                        </h3>
                         <p style={{color:'#000000'}}>May 14 - 15, 2022 - Celebrate Kids' Weekend! For every General Admission ticket ...</p>
                           <hr className={styles.new1}></hr> <br></br>
                         <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                        <img src={vector1} alt="" /></div>
                       
                    </div>
                     <div className={styles.whatappelement}>
                     <img className={styles.wh} src={imMothersg} alt="" />
                       <div  className={styles.khanhdat1}>
                          <h3 style={{color:'#000000'}}> Mother's Day Weekend</h3>
                           <p style={{color:'#000000'}}>May 7 & 8, 2022 - Celebrate Mother's Day! When a family brings Mom to the park and ...</p>
                             <hr className={styles.new1}></hr> <br></br>
                           <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                          <img src={vector1} alt="" /></div>
      
                      
                    </div>
                     <div className={styles.whatappelement}>
                     <img className={styles.wh} src={Opening} alt="" />
                      <div  className={styles.khanhdat1}>
                          <h3 style={{color:'#000000'}}> Opening Day
                          </h3>
                           <p style={{color:'#000000'}}>April 30 & May 1, 2022 - We will open its gates for the 2022 season...
                          </p>
                             <hr className={styles.new1}></hr> <br></br>
                           <img src={Vector} alt="" />  &nbsp; 100 &nbsp;
                          <img src={vector1} alt="" /></div>
                        
                    </div><br></br>
      
      
                </div>
            </div>
            
         </div>

        </div>
</div>

</div>
</div>
  )

}

export default Whatup;