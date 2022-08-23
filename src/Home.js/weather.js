import { useState, useEffect , memo} from 'react';
import styles from './weather.module.css';
import Hot from './imghome/hot.png'


function Weather(){
  

    const [name , setname] = useState([]);
    const [country , setcountry] = useState('');
    const [weather , setweather] = useState('ha noi');
    const [weathera , setweathera] = useState('');

  const handleChange = (event)=>{
    setweather  (event.target.value)

   
  }




 var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+ 1;
var hour = date.getDate();

let hours = date.getHours();
let miuter = date.getMinutes();
var gio = `${hours} : ${miuter}`
var ngay = `${year}/ ${month} /${hour}`

 


   var khanhdat = useEffect(()=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`)
      .then(res => res.json())
      .then((respon)=>{
         setname (respon.name + respon.sys.country)
         setcountry(respon.main.temp)
         setweathera(respon.wind.speed +  'm/s' )
      

    })


  },[weather])

  

  

    return(

<div>
		<div className={styles.hot}>
			<h1 style={{color: 'white', marginLeft:'20px'}}>Weather</h1>
            <img className={styles.img} src={Hot}  />
			<input onChange={handleChange} placeholder='seach'   className={styles.inputsearch}></input>
			<div className={styles.content}>
				<h1 className={styles.name}>
					<span className={styles.city} style={{color : 'white'}}>{name}</span>
					<span>,</span>
					<span  className={styles.country} style={{color : 'white'}}>VN</span>
				</h1>
				<p className={styles.time} style={{color : 'white'}}>{gio} <br></br>{ngay}</p>
				<div className={styles.temperature}>
					<span className={styles.value}  style={{color : 'white'}}> {country }</span>
					<span style={{color : 'white'}}><sup>o</sup>C</span>
				</div>
				<div className={styles.shortdesc} style={{color : 'white'}}>Clouds</div>
				<div className={styles.moredesc}>
					<div className={styles.visibility}>
						<i className={styles.farfaeye}></i>
					
					</div>
					<div className={styles.wind}>
						<i className={styles.fasfawind}></i>
						<span>{weathera} (m/s)</span>
					</div>
					<div className={styles.cloud}>
						<i ></i>
						<span>91 (%)</span>
				
                        </div>
	
                        </div>
          
                        </div>

                        </div>
                        </div>
   )
 
    


}

export default memo(Weather);