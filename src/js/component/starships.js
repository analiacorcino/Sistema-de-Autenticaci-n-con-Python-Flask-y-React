import { element } from "prop-types";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const Starships = () => {

  const [starships, setStarships] = useState([]);

 //API

 const getList = async ()=>{
  try {
      const response = await fetch("https://swapi.dev/api/starships/", {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      })
      const data = await response.json()
      setStarships(data.results);
      console.log(data.results);
  } catch (error) {
      console.log(error);
  }
}



useEffect(()=>{
  getList()
},[])

// starship

return (
       
    
        <>
      

      <div> <h1 className="text-danger mt-3 mb-3">Vehicles</h1> </div>
      
      <div className="container overflow-auto">

      <div className="d-flex flex-row flex-no-wrap">
      {starships.map((element, index) => {
    
    return (
   
   <div className="card m-2" style={{minWidth: "18rem"}}  key={index}>
     <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(index+1)+".jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{element.name}</h5>
          <p className="card-text"> Model : {element.model} </p>
          <p className="card-text">Starship Class: {element.starship_class} </p>
          <p className="card-text">Crew: {element.crew}</p>
         
          <div className="d-flex">
              <Link className="btn btn-outline-primary" to={"/starship/"+(index+1)}>Learn more</Link> 
              <a href="#" className="btn btn-outline-warning ms-auto"><i className="far fa-heart"></i> </a> 
          </div>


        </div>
        </div>)
      })
      
      }
      </div>
      </div>
      </>



	);
};



