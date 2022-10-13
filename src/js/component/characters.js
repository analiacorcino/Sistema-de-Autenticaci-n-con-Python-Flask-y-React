import { element } from "prop-types";
import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import  { Context } from "../store/appContext";

export const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const {store, actions} = useContext (Context);

 //API

 const getList = async ()=>{
  try {
      const response = await fetch("https://swapi.dev/api/people/", {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      })
      const data = await response.json()
      setCharacters(data.results);
      console.log(data.results);
  } catch (error) {
      console.log(error);
  }
}


function bookmarkExist(index) {
	let valueExist;
	for (let i = 0; i < store.bookmarks.length; i++) {
		if(store.bookmarks[i].id == index){
			valueExist = true
		}
	}
	if (valueExist === true) {
		return true
	}
}

useEffect(()=>{
  getList()
},[])

// caracters

return (
       
    
        <>
      

      <div> <h1 className="mt-3 mb-3">Characters</h1> <hr/></div>
      
      <div className="container overflow-auto">

      <div className="d-flex flex-row flex-no-wrap">
      {characters.map((element, index) => {
    
    return (
   
   <div className="card m-2" style={{minWidth: "18rem"}}  key={index}>
     <img src={"https://starwars-visualguide.com/assets/img/characters/"+(index+1)+".jpg"} className="card-img-top" alt="..."/>
        <div className="card-body bg-dark">
          <h2 className="card-title">{element.name}</h2>
          <p className="card-text"> Hair Color : {element.hair_color} </p>
          <p className="card-text">Eye Color: {element.eye_color} </p>
          <p className="card-text">Gender: {element.gender}</p>
         
          <div className="d-flex">
              <Link className="btn btn-outline-primary" to={"/people/"+(index+1)}>Learn more</Link> 
              <button className="btn btn-outline-warning ms-auto" onClick={()=> actions.addBookmark(("c-"+index), "(C) "+element.name)}><i className={bookmarkExist("c-"+index) === true ? "fas fa-heart text-danger" :"far fa-heart"}></i></button> 

              


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



