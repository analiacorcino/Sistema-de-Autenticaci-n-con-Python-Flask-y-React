import { element } from "prop-types";
import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

export const Planet = () => {

  const [Planet, setPlanet] = useState([]);
  const theid = useParams ()

 //API

 const getList = async ()=>{
  try {
      const response = await fetch("https://swapi.dev/api/planets/"+theid.theid,  {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      })
      const data = await response.json()
      setPlanet(data);
      console.log(data);
  } catch (error) {
      console.log(error);
  }
}



useEffect(()=>{
  getList()
},[])


	return (
		<>

<div className="container">

<div className="container d-flex justify-content-center m-5">

  <div className="card mb-3 rounded-0 bg-dark"  style={{maxWidth: "940px"}}>
  <div className="row g-0">
    <div className="col-md-6">
  
    {theid.theid === "1" ?
                            <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="img-fluid h-100 w-100" alt="..."/>
                        :
                            <img src={"https://starwars-visualguide.com/assets/img/planets/"+theid.theid+".jpg"} className="img-fluid h-100 w-100" alt="..."/>
                        }
                        
    </div>
    <div className="col-md-6 p-4">
      <div className="card-body">
        <h1 className="card-title">{Planet.name}</h1>
        <p className="card-text">Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012. 
        </p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container d-flex justify-content-center m-3">
    <ul> <hr/>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Rotation Period : {Planet.rotation_period} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Diameter: {Planet.diameter} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Climate: {Planet.climate} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Gravity: {Planet.gravity} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Terrain : {Planet.terrain} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Surface Water: {Planet.surface_water} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Population: {Planet.population} </li>
    </ul>
</div>

</div>
    
		</>
	);
};
