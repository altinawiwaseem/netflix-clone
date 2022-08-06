import { useEffect } from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
function App() {



useEffect(()=>{
  
},[])


  return (

    <div className="App">
      <Row title= "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title= "Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
