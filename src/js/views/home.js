import React from "react";
import "../../styles/home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Characters } from "../component/characters.js";
import { Planets } from "../component/planets.js";
import { Starships } from "../component/starships.js";



export const Home = () => (
	<>
	<div className="container fondoGrandiente p-5">
		<Characters/>
		<Planets/>
	{/* <Starships/> */}
	</div>
	</>
	

);
