
import "./App.css";
import { useState } from "react";

const api = {
  key: "e15d6e2275f6bb6cf8cae981437416d4",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

return (
<div>
    <div className="App">

      <div className="App-header"> 
        <h1>Weather App</h1>
        <div>
          <input  className="inputText"
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button  className="btn" onClick={searchPressed}>Search..</button>
        </div>


<div   className="container">
        
        {typeof weather.main !== "undefined" ? (
          <div>
           
            <p>{weather.name}</p>

            
            <p>{weather.main.temp}°C</p>

           
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : ( "")
        }
         
    </div>
    <div  className="wevy">
          <div  className="waveone"></div>
            
            <svg  className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="0.5" d="M0,224L18.5,192C36.9,160,74,96,111,106.7C147.7,117,185,203,222,218.7C258.5,235,295,181,332,154.7C369.2,128,406,128,443,133.3C480,139,517,149,554,144C590.8,139,628,117,665,144C701.5,171,738,245,775,240C812.3,235,849,149,886,117.3C923.1,85,960,107,997,128C1033.8,149,1071,171,1108,170.7C1144.6,171,1182,149,1218,149.3C1255.4,149,1292,171,1329,186.7C1366.2,203,1403,213,1422,218.7L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
            <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" opacity="0.2" d="M0,288L30,250.7C60,213,120,139,180,128C240,117,300,171,360,176C420,181,480,139,540,101.3C600,64,660,32,720,64C780,96,840,192,900,234.7C960,277,1020,267,1080,266.7C1140,267,1200,277,1260,261.3C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            <svg className="svg3"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,288L30,250.7C60,213,120,139,180,128C240,117,300,171,360,176C420,181,480,139,540,101.3C600,64,660,32,720,64C780,96,840,192,900,234.7C960,277,1020,267,1080,266.7C1140,267,1200,277,1260,261.3C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
          </div>
      </div> 
    </div>
</div>

  );
}

export default App;
