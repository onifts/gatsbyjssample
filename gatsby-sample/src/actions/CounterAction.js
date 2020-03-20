
// Action Type 
const INCREMENT = '@cwkim/INCREMENT' ;
const DECREMENT = '@cwkim/DECREMENT' ;

// Action Creator  
export const increment = (param=1) => ({ type: INCREMENT, param: param }) ;
export const decrement = () => ({ type: DECREMENT }) ;

export {
	INCREMENT,
	DECREMENT,
}
