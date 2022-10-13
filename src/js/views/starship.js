import { element } from "prop-types";
import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

export const Starship = () => {

  const [Starship, setStarship] = useState([]);
  const theid = useParams ()

 //API

 const getList = async ()=>{
  try {
      const response = await fetch("https://swapi.dev/api/starships/"+theid.theid,  {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      })
      const data = await response.json()
      setStarship(data);
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

  <div className="card mb-3 rounded-0" style={{maxWidth: "940px"}}>
  <div className="row g-0">
  <div className="col-md-6">
    <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+theid.theid+".jpg"} className="img-fluid h-100 w-100" alt="..."/>
    </div>
    <div className="col-md-6 p-4">
      <div className="card-body">
        <h1 className="card-title"> </h1>
        <p className="card-text">Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012. 
        </p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container d-flex justify-content-center m-3">
    <ul> <hr/>
        <li className="d-inline text-danger"> <i className="fas fa-arrow-circle-right"></i> Rotation Period : {Starship.rotation_period} </li>
        <li className="d-inline text-danger"> <i className="fas fa-arrow-circle-right"></i> Diameter: {Starship.diameter} </li>
        <li className="d-inline text-danger"> <i className="fas fa-arrow-circle-right"></i> Climate: {Starship.climate} </li>
        <li className="d-inline text-danger"> <i className="fas fa-arrow-circle-right"></i> Gravity: {Starship.gravity} </li>
        <li className="d-inline text-danger"> <i className="fas fa-arrow-circle-right"></i> Terrain : {Starship.terrain} </li>
        <li className="d-inline text-danger"> <i className="fas fa-arrow-circle-right"></i> Surface Water: {Starship.surface_water} </li>
        <li className="d-inline text-danger"> <i className="fas fa-arrow-circle-right"></i> Population: {Starship.population} </li>
    </ul>
</div>

</div>
    
		</>
	);
};
