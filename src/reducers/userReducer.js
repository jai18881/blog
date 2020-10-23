/**
 * Created by jai on 11/24/19.
 */
export default (state = [], action) => {

	switch (action.type) {
		case 'FETCH_USER':
			return [...state, action.payload];
		default:
			return state;
	}
}