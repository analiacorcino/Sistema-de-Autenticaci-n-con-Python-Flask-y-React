import { element } from "prop-types";
import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import  { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext (Context);
	return (
		
		<nav className="navbar navbar-dark bg-dark mb-3 p-3 position-sticky top-0" style={{zIndex: "100"}} >
			<Link to="/">
			<img src="https://cdn.shopify.com/s/files/1/0013/7332/files/product.star-wars.logo.png" className="mx-2 card-img-top" alt="..." style={{maxWidth: "170px"}}></img>
			</Link>
		
		
			<div className="dropdown ml-auto">
			
				<button className="btn btn-primary btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				<i className="far fa-heart"></i> Favorties <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {store.bookmarks.length}</span>
  				</button>
				<ul className="dropdown-menu dropdown-menu dropdown-menu-end">
				{store.bookmarks.map((element, index) => {
		return(



			element.label.includes('(C)') 
			?
				<li key={index}><Link to={"/people/"+(index+1)} className="dropdown-item d-inline">{element.label} </Link><i className="far fa-trash-alt d-inline mx-2" role="button" onClick={()=> actions.removeBookmark(index)}></i></li>
			:
				<li key={index}><Link to={"/planet/"+(index+1)} className="dropdown-item d-inline">{element.label} </Link><i className="far fa-trash-alt d-inline mx-2" role="button" onClick={()=> actions.removeBookmark(index)}></i></li>
				)})}


				</ul>
	
		</div>
	</nav>
		
	);
};



