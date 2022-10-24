import React, {useContext} from "react";
import { Link } from "react-router-dom";
import  { Context } from "../store/appContext";

export const Planets = () => {


  const {store, actions} = useContext (Context);



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




// caracters

return (
       
    
        <>
      

      <div> <h1 className="mt-5 mb-5">Planets</h1>
      <hr/></div>
       

      <div className="container overflow-auto">
      <div className="d-flex flex-row flex-no-wrap">

    
      {store.planets.map((element, index) => {
    
    return (
   

   <div className="card m-2" style={{minWidth: "18rem"}}  key={index}>
      
      {index === 0 ?
									<img src={"https://i.imgur.com/N74ARLR.png"} className="card-img-top" alt="..."/>
				:
									<img src={"https://starwars-visualguide.com/assets/img/planets/"+(index+1)+".jpg"} className="card-img-top" alt="..."/>
			}

       <div className="card-body bg-dark">
          <h2 className="card-title">{element.name}</h2>
          <p className="card-text"> Population : {element.population} </p>
          <p className="card-text">Terrain: {element.terrain} </p>
        
         
          <div className="d-flex">
              <Link className="btn btn-outline-primary" to={"/planet/"+(index+1)}>Learn more</Link> 
              <button className="btn btn-outline-warning ms-auto" onClick={()=> actions.addBookmark(("p-"+index), "(P) "+element.name)}><i className={bookmarkExist("p-"+index) === true ? "fas fa-heart text-danger" :"far fa-heart"}></i></button> 
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



