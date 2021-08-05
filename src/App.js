import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
function App() {
  const [data,setData] = useState([]);
  const [num,set] = useState(0)
  useEffect(()=>{
    setData([])
    axios('https://restcountries.eu/rest/v2/region/asia')
    .then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
  },[num])





  return (
    <>
      <button onClick={()=>{
        console.log('clicked')
        set(Math.random())
      }}>  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Refresh_icon.svg" alt="" />  </button>
    <div className="App">
      {
      data.map((items)=>{
          return(
            <div id='countries' style={{backgroundImage:`url(${items.flag})`}} onClick={()=>{
              window.location.href = `https://en.wikipedia.org/wiki/${items.name}`
            }}>
              <div id='details' >
                <p> Name : {items.name} </p>
                <p> Capital : {items.capital} </p>
                <p> Region : {items.region} </p>
                <p> Population : {items.population} </p>
                <p> Borders : {items.borders.length!=0 ? items.borders.map((border)=>border +'  ' ) : 'NA'} </p>
                <p> Languages Spoken : {items.languages.length!=0 ? items.languages.map((language) => language.name + '  ') : 'NA'} </p>

              </div>
            </div>
          )
        })
      }
    </div>
    </>
  );
}

export default App;
