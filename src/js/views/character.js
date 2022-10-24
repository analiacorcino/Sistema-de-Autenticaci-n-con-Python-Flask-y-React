import React, {useContext} from "react";
import { useParams  } from "react-router-dom";
import  { Context } from "../store/appContext";

export const Character = () => {

const theid = useParams()
const id = parseInt(theid.theid) -1

const {store, actions} = useContext (Context);

	return (
		<>


        <div className="container">

  <div className="container d-flex justify-content-center m-5 ">
  <div className="card mb-3 bg-dark rounded-20" style={{maxWidth: "940px"}}>
  <div className="row g-0">
    <div className="col-md-6">
    <img src={"https://starwars-visualguide.com/assets/img/characters/"+theid.theid+".jpg"} className="img-fluid h-100 w-100" alt="..."/>
    </div>
    <div className="col-md-6 p-4">
      <div className="card-body ">
        <h1 className="card-title">{store.characters[id].name}</h1>
        <p className="card-text">Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012. 
        </p>
     
          
          
      </div>
    </div>
  </div>
</div>
</div>

<div className="container d-flex justify-content-center m-3">
    <ul> <hr/>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Hair Color : {store.characters[id].hair_color} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Skin Color : {store.characters[id].skin_color} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Eye Color: {store.characters[id].eye_color} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Gender: {store.characters[id].gender} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Birthday: {store.characters[id].birth_year} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Height : {store.characters[id].height} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Mass: {store.characters[id].mass} </li>
        <li className="d-inline"> <i className="fas fa-arrow-circle-right"></i> Gender: {store.characters[id].gender} </li>
    </ul>
</div>


</div>
    
		</>
	);
};
