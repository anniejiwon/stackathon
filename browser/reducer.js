var serverData = require('../../server');
//import connect here ******






// currentQuestion Reducer:
export function reducer(currentQuestion = '', action) {
    switch(action.type) {
        default:
            return items;
    }
}



export const fetchRandomQuestion = () => ((dispatch) => {
	console.log("dispatching single item")
	console.log("ITEM IN FETCH: ", itemId)
	
	fetch(`/api/items/${itemId}`)
    .then(res => res.json())
    .then(item => {
    	console.log("ITEM: ", item)
    	dispatch(getSelectedItem(item))

    });
})
