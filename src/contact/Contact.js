import styles from './Contact.module.css';
import CampingNight from './img/Camping Night.jpg';
import Carnival from './img/Carnival of the year.jpg';
import dragon from './img/Dragon Ride upgrade.jpg';
import vector from './img/Vector.png';
import vector1 from './img/vector1.png';

function Contact(){
    function Send(){   

    var validated = true;

    let fistname = document.getElementById('fistName').value;
    let lastname = document.getElementById('Lastname').value;
    let Email = document.getElementById('Email').value;
    let messenger = document.getElementById('Category').value;
    if(fistname == '') {
       
        document.getElementById('errorfullname').innerText
            = 'Please enter Fist name';
        validated = false;
    } else {
        document.getElementById('errorfullname').innerText = '';
    }
    if(lastname == '') {
        document.getElementById('errorlastname').innerText
            = 'Please enter Last name';
        validated = false;
    } else {
        document.getElementById('errorlastname').innerText = '';
    }
    if(Email == '') {
        document.getElementById('errorEmail').innerText
            = 'Please enter Email ';
        validated = false;
    } else {
        document.getElementById('errorEmail').innerText = '';
    }
    if(messenger == '') {
        document.getElementById('errormessenger').innerText
            = 'Please enter Messenger';
        validated = false;
    } else {
        document.getElementById('errormessenger').innerText = '';
    }
    if(validated){
        alert('submitted successfully');
    }
    return 0 ;
   
}

return (

<div>
<div className={styles.contact}>
        <div style={{padding: '30px', width: '524px' , height: '288px' ,display: 'inline-block'}}><h2><span>Contact</span></h2>
        <form action="">
            <div style={{display: 'inline-block'}}>
                <input id="fistName" type="text" style={{width: '250px'}} placeholder="Fist Name" />
         <p style={{color: 'red'}} id="errorfullname"></p></div>
         <div style={{float: 'right'}}><input id="Lastname" type="text" style={{width: '250px',float: 'right', position: 'relative'}} placeholder="Last Name" />
            <p style={{color: 'red'}} id="errorlastname"></p></div>
            <div><input id="Email" type="text" style={{width: '99%'}} placeholder="Email"/>
            <p style={{color: 'red'}} id="errorEmail"></p></div>
            <div><input id="Category" type="text" style={{width: '99%'}} placeholder="Category"/>
            <p style={{color: 'red'}} id="errormessenger"></p></div>

            <button type="button" className={styles.button} onClick={Send}><h2 >Send</h2></button>
           

         </form>
        
        </div>
        <div style={{float: 'right', paddingTop:'20px', paddingRight: '15px'}}> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4337.624795316165!2d105.77982581190598!3d21.0282920723003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32ecb92db%3A0x3964e6238a3bd088!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1658532790686!5m2!1svi!2s" style={{width:"500px", height:"450px" , border: '0',loading:"lazy" , referrerpolicy : "no-referrer-when-downgrade"}}    ></iframe></div>
        </div>
        <div className={styles.body2}  style={{height: '600px', width: '1110px'}}> 
          <div><h2>MAYBE YOU DON’T WANNA MISS</h2></div><br></br>

           <div style={{justifyContent: 'space-around', display: 'flex'}}>
           
           
           <div className={styles.whatappelement}>
               <img className={styles.wh} src={CampingNight} alt="" />
               <div className={styles.text}>
               <h3> Camping Night</h3>
                <p>20:00 PM June 23, 2022 Prepare for the outdoor camping with your family and friends</p>
                <hr style={{width :'300px'}} className={styles.new1}/>
                <img src={vector} alt="" />  &nbsp; 100 &nbsp;
                <img src={vector1} alt="" /></div>
              
           </div>
           <div className={styles.whatappelement}>
               <img className={styles.wh} src={Carnival} alt="" />
               <div className={styles.text} >
                 <h3> Carnival of the year</h3>
                  <p>19:30 PM June 23, 2022 We have the biggest carnival you must join</p>
                  <hr style={{width :'300px'}} className={styles.new1}/>
                  <img src={vector} alt="" />  &nbsp; 100 &nbsp;
                  <img src={vector1} alt="" />
                  </div>

             
           </div>
           <div className={styles.whatappelement}>
              <img className={styles.wh} src={dragon} alt="" />
              <div className={styles.text} >
                 <h3> Dragon Ride upgrade</h3>
                  <p>From 20:00 PM June 20, 2022 Sorry for your experience with the game, we currently...</p>
                  <hr style={{width :'300px'}} className={styles.new1} />
                  <img src={vector} alt="" />  &nbsp; 100 &nbsp;
                  <img src={vector1} alt="" /></div>
               
           </div><br></br>
       </div>
     </div>
        </div> 

       

   
        

  
)


}

export default Contact;