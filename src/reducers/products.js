import * as types from './../constants/ActionType';
import * as configs from './../constants/Config';

let defaultState = [
{
	

		id: 1,
		name: 'Iphone 8',
		image: 'https://www.bing.com/th?id=OIP.BciJQ7fpbq-p_00rqKFPiwHaOb&pid=Api&rs=1',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 12,
		inventory:10
	
	},


{
		id: 2,
		name: 'Samsung 7',
		image: 'https://www.bing.com/th?id=OIP.SV7iNKZY3HnOfLZGE2RvQwHaIW&pid=Api&rs=1',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 22,
		inventory:20
	
},

{
		id: 3,
		name: 'HTC',
		image: 'https://www.bing.com/th/id/OIP.1y44SpTTlVdjs4HtqeuJ8gHaHa?pid=Api&rs=1',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 5,
		inventory:30
	}

		
]; 

const products = (state =defaultState ,action) =>{
	switch(action.type){
		case types.LIST_PRODUCT:
			return state;
		default:
			return state
	}
}
export default products; 



