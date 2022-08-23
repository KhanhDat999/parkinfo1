import img1 from './img/img1.png';
import reactange14 from './img/Rectangle 14.png';
import Rectangle1404 from './img/Rectangle 1404.png';
import Rectangle1406 from './img/Rectangle 1406.png';
import Rectangle1408 from './img/Rectangle 1408.png';
import Rectangle1409 from './img/Rectangle 1409.png';
import styles from './Parkcharacter.module.css';








function Parkcharacter(){


    return<div>
<div style={{width : '100%' , height:'2670px'}}>
<div ><img className={styles.img} src={img1} alt="" /></div>

<div className={styles.backcolor}></div>
<div className={styles.item}>

    
        <h1>THEME PARK CHARACTERS</h1>
           <div className={styles.body}>
            
               <div className={styles.body1}>
                   <div style={{float: 'left', width: '420px'}}> <img src={Rectangle1404} alt="" /></div>
                     <div className={styles.textbody}>
                       <h2 >RAI N BOW </h2> <br></br>
                       <p style={{fontSize: '16px'}}>Rai n Bow are the fabulous mascots of Rainbow's End. They are both very friendly and enjoy meeting and taking photos with everyone. <br></br><br></br>

                        Come find out what adventures they've been on!</p>
                      </div>
                      </div>         
                                    
             <hr></hr>
   
         <div className={styles.body1}> 
                <div className={styles.khanhdat}>
                   <img src={Rectangle1406} />   </div>
              
                   <div className={styles.textbody}>
                    <h2 >PRINCESS SAPPHIRE</h2><br></br>
                    <p >Princess Sapphire was born in Rainbow Kingdom and enjoys looking after everyone there. <br></br><br></br>

                        When Kidz Kingdom was created, Princess Sapphire left her brother to rule the Rainbow Kingdom and came to live on this side of the rainbow for awhile with all the Kidz Kingdom folk. 
                        
                        <br></br>IRIS THE FAIRY</p>
         </div>
   
                         
                       
                  </div><hr></hr>  
               <div className={styles.body1}>
                <div style={{float: 'left', width: '420px'}}> <img src={Rectangle1408} alt="" /></div>
                  <div className={styles.textbody}>
                    <h2 >IRIS THE FAIRY </h2><br></br>
                    <p >ris is the most adventurous fairy from Rainbow Kingdom, the name Iris even means rainbow in Greek! <br></br> <br></br>

She loves rainbow lollies and has lots of energy to run, skip and play with everyone. Iris just loves meeting children in Kidz Kingdom.</p>
                   </div>
                
              </div><hr></hr>
              <div className={styles.body1}> 
               <div style={{float: 'right',  width: '420px'}}> <img  src={reactange14} alt="" /></div>
               <div className={styles.textbody}>
                <h2 >ENZO THE MAGICIAN</h2><br></br>
                <p>Enzo the magician is always excited to meet and talk with everyone.<br></br>

                    He is still learning magic, but tries very hard to do his best. He is always happy to show off his latest trick – but maybe just stand back a little!</p>
               </div>
                    
               </div><hr></hr>
                 <div className={styles.body1}>
                   <div style={{float: 'left', width: '420px'}}> <img src={Rectangle1409} alt="" /></div>
                     <div className={styles.textbody}>
                    <h2 >SIR PRISED ALOT</h2><br></br>
                    <p>Sir Prised Alot is a very brave knight from Rainbow Kingdom. <br></br>

                        He takes his knightly duty to look after all the visitors in Kidz Kingdom very seriously. You can often see him striding about making sure everyone is happy and enjoying their day.</p>
                   </div>
                
            </div>
      <div>
   
     
    
     </div>



     </div> 
     </div> 
     </div> 
     </div> 
  
}

export default Parkcharacter;