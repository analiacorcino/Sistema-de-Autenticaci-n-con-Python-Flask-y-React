const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			bookmarks: []
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
