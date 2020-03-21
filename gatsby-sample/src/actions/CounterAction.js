
// Action Type 
const INCREMENT = '@oni/INCREMENT' ;
const DECREMENT = '@oni/DECREMENT' ;

// Action Creator  
export const increment = (param=1) => ({ type: INCREMENT, param: param }) ;
export const decrement = () => ({ type: DECREMENT }) ;

export {
	INCREMENT,
	DECREMENT,
}
