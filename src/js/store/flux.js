const APIUrl = "https://3000-analiacorci-jwtbuildast-q2gfipzutq0.ws-us72.gitpod.io"


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			bookmarks: [],
			planets: [],
			characters: []
		},
		
		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			

/* ############ POST */

postData: async (route, bodyData)=>{
	try {
		const response = await fetch(APIUrl+route, {
			method: "POST",
			body: JSON.stringify(bodyData),
			headers: {
				"Content-Type": "application/json"
			}	
		})
		if (response.status === 200) {
			const data = await response.json()
			return {data: data, status: response.status}
		}
	} catch (error) {
		console.log(error);
		return {status: response.status}
	}
},
/* GET */
getData: async (route)=>{
	try {
		const response = await fetch(APIUrl+route, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		const data = await response.json()
		console.log(data);
		return data
	} catch (error) {
		console.log(error);
	}
},

/* ############### PUT */
putData: async (route, bodyData)=>{
	try {
		const response = await fetch(APIUrl+route, {
			method: "PUT",
			body: JSON.stringify(bodyData),
			headers: {
				"Content-Type": "application/json"
			}	
		})
		if (response.status === 200) {
			const data = await response.json()
			return {data: data, status: response.status}
		}
	} catch (error) {
		console.log(error);
		return {status: response.status}
	}
},



/* #################DELETE */ 

deleteData: async (route)=>{
	try {
		const response = await fetch(APIUrl+route, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}	
		})
		if (response.status === 200) {
			const data = await response.json()
			return {data: data, status: response.status}
		}
	} catch (error) {
		console.log(error);
		return {status: response.status}
	}
},


//###############Inicio Personajes

getAllCharacters: async () => {
	const action = getActions()
	const data = await action.getData('/characters');
	console.log(data);
	setStore({characters: data})
},

//###############Fin Personajes


////###############Inicio Planetas
getAllPlanets: async () => {
	const action = getActions()
	const data = await action.getData('/planets');
	setStore({planets: data})
},


//###############Fin Planetas




			addBookmark: (index, value) => {
				const store = getStore();
				const actions = getActions();
				let valueExist, valueIndex;
				for (let i = 0; i < store.bookmarks.length; i++) {
					if(store.bookmarks[i].id == index){
						valueExist = true
						valueIndex = i;
					}
				}
				if (valueExist === true) {
					actions.removeBookmark(valueIndex)
				} else {
					setStore({bookmarks: [...store.bookmarks, {id: index, label: value}]})
				}
			},


			removeBookmark: (index, value) => {
				const store = getStore();
				setStore ({bookmarks: [
				...store.bookmarks.slice(0, index),
				...store.bookmarks.slice (index+1, store.bookmarks.length)
				]})
			},






			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
