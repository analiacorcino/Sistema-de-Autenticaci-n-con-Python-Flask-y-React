import React, {useContext} from "react";
import { useParams  } from "react-router-dom";
import  { Context } from "../store/appContext";

export const Planet = () => {

const theid = useParams()
const id = parseInt(theid.theid) -1

const {store, actions} = useContext (Context);

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
        <h1 className="card-title">{store.planets[id].name}</h1>
        <p className="card-text">Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012. 
        </p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container d-flex justify-content-center m-3">
    <ul> <hr/>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Rotation Period : {store.planets[id].rotation_period} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Diameter: {store.planets[id].diameter} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Climate: {store.planets[id].climate} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Gravity: {store.planets[id].gravity} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Terrain : {store.planets[id].terrain} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Surface Water: {store.planets[id].surface_water} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Population: {store.planets[id].population} </li>
    </ul>
</div>

</div>
    
		</>
	);
};
