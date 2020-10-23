/**
 * Created by jai on 11/24/19.
 */
import axios from 'axios';

export default axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});