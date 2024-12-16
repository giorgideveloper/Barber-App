import axios from 'axios';

const API = axios.create({
	baseURL: 'http://your_server_ip:5000/api', // შეცვალე შენი სერვერის მისამართით
});

export const registerUser = data => API.post('/users/register', data);
export const loginUser = data => API.post('/users/login', data);
export const createBooking = (data, token) =>
	API.post('/bookings/create', data, {
		headers: { Authorization: token },
	});
export const updateBooking = (data, token) =>
	API.post('/bookings/update', data, {
		headers: { Authorization: token },
	});

export default API;
