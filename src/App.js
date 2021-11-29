import React, {Fragment, useState , useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Climate from './components/Climate';



function App() {
  
  const [ search, keepSearch ] = useState({
    city:'',
    country:''
  });

  const {city , country} = search;

  const [ query, keepQuery] = useState(false);
  const [ result , keepResult] = useState({});
  
  //useEffect detecta los cambios en las dependencias, para que no estemos todo el tiempo consultando la api 
  useEffect(() => {
    const queryAPI = async () => {
      if (query){
        const appID = '1cf12005c9244a58f6e65fb99433b823';
        // Petición estructurada 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;
        const reply = await fetch(url); 
        const result = await reply.json();

        keepResult(result);
        keepQuery(false); // Para poder hacer multiples consultas
      }
    }

    queryAPI();
  },[query]);
  
  return (
    <Fragment>
      <Header
        title = "World Climate"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
              <div className="col m6 s12">
                  <Form 
                    search={search}
                    keepSearch={keepSearch}
                    keepQuery={keepQuery}
                  />
              </div>
              <div className="col m6 s12">
                  <Climate
                    result = {result}
                  />
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
