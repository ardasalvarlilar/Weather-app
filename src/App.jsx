import { useEffect, useState } from 'react';
import axios from 'axios';
import Values from './components/Values';
import TurkeyMap from 'turkey-map-react';


function App() {
  const [city, setCity] = useState('')
  const [response, setResponse] = useState('')
  const [anlikSehir, SetAnlikSehir] = useState('')
  const cities =["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
]

  const key  = '07d729afeaf955174e0f167c92b4f902'
  useEffect(() =>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`);
        setResponse(response.data)
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    if(city !== ''){
      getApi()
    }
  },[city])
  return (
    <>
      <select onChange={(e)=>setCity(e.target.value)}>
        {
          cities.map((city,index)=>(
            <option key={index} value={city}>{city}</option>
          ))
        }
      </select>
      <p>{anlikSehir}</p>
        <TurkeyMap 
          onClick={ ({ name }) => setCity(name)} 
          onHover={ ({ name }) => SetAnlikSehir(name) } 
        />
      {
        response &&
      <Values response = {response}/>
      }
    </>
  );
}

export default App;
