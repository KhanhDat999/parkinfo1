import Img from './img/Rectangle 1399.png'
import styles from './opportuniti.module.css'
import Weocome from './img/3545f49ee7278db6a6d44e62e4e9bfeb.jpeg'

function Opportunity(){

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
            document.getElementById('ok').style.display ="block";
        }
        return 0 ;
       
    }
    function on(){
       document.getElementById('ally').style.display = 'block';
    }
   function off(){
    document.getElementById('ally').style.display = 'none';
   }

//    function showSuccessToast() {
//     toast({
//       title: "Thành công!",
//       message: "Bạn đã đăng ký thành công tài khoản tại F8.",
//       type: "success",
//       duration: 5000
//     });
//   }



   
    return(
       <div  >
        <div id='ok' className={styles.ok} style={{color :'red'}}><h2 style={{color :'red'}}>
Successful</h2>
<p>
      We will contact you !</p>
</div>

      <div id='ally'   className={styles.apply}>
       
        <div   className={styles.login} > 
        <div onClick={off} className={styles.dat}> </div>
        <div   id='contact' className={styles.contact}>
           
        <div style={{padding: '30px', width: '524px' , height: '288px' ,display: 'inline-block'}}><h2><span>
              Information</span></h2>
        <form action="">
            <div style={{display: 'inline-block'}}>
                <input id="fistName" type="text" style={{width: '250px'}} placeholder="Fist Name" />
         <p style={{color: 'red'}} id="errorfullname"></p></div>
         <div style={{float: 'right'}}><input id="Lastname" type="text" style={{width: '250px',float: 'right', position: 'relative'}} placeholder="Last Name" />
            <p style={{color: 'red'}} id="errorlastname"></p></div>
            <div><input id="Email" type="text" style={{width: '99%'}} placeholder="Email"/>
            <p style={{color: 'red'}} id="errorEmail"></p></div>
            <div><input id="Category" type="text" style={{width: '99%'}} placeholder="phone number"/>
            <p style={{color: 'red'}} id="errormessenger"></p></div>

            <button type="button" className={styles.button} onClick={Send}><h2 >Send</h2></button>
           
        
         </form>
             
        </div>
            <div style={{float: 'right', paddingRight: '15px'}}> <img src={Weocome} style={{width:"520px", height:"480px" , border: '0'}}/></div>
        </div>
        
        </div>
        </div>   
          
     <div    style={{height : '1000px'}}>
 
             <div className={styles.img}>
                <img src={Img} style={{width : '1600px'}} />
             </div>
             <div className={styles.body}>
                 <div className={styles.content}>
                      <table>
                        <tbody>
                        <tr>
                         <th style={{flex: '1'}}>POSITION</th>
                         <th>SALARY</th>
                         <th >DEDLINE</th>
                         <th >APPLY </th>
                       </tr>
                       <tr>
                          <td> Manager of Account Management <br></br> <p>Posted today</p></td>
                          <td> $1000 </td>
                          <td> 30/10/2022</td>
                          <td><button className={styles.button} onClick={on}> Apply</button></td>
                        </tr>
                        <tr>
                            <td>Senior Product Manager <br></br> <p>Posted 6 days ago</p>   </td>
                            <td>$2000</td>
                            <td>30/10/2022</td>
                              <td><button className={styles.button} onClick={on}> Apply</button></td>
                        </tr>
                        <tr>
                            <td>Technical Recruiter ( Maternity Cover) <br></br><p>Posted 12 days ago</p> </td>
                            <td>$2000 </td>
                            <td>30/10/2022</td>
                              <td><button className={styles.button} onClick={on}> Apply</button></td>
                        </tr>
                        <tr>
                            <td> UX Data Analyst ( Optional Remote) <br></br><p> Posted 22 days ago</p></td>
                            <td>$2000 </td>
                            <td>30/10/2022</td>
                              <td><button className={styles.button} onClick={on}> Apply</button></td>
                        </tr>
                        <tr>
                            <td> Customer Support Specialist <br></br> <p>Posted about 1 month ago</p> </td>
                            <td>$1500 </td>
                            <td>30/10/2022</td>
                              <td><button className={styles.button} onClick={on}> Apply</button></td>
                        </tr>
                        </tbody>
                      </table>
                     

                 </div>
   
</div>
</div>
</div>

    )
        
    
}
export default Opportunity;