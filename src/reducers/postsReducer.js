/**
 * Created by jai on 11/24/19.
 */
export default (state = [], action) => {

	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}
}