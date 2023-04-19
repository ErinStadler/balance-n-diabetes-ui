import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/balancendiabetes/v1/users";
class UserService {
    loginUser(credentials) {
        return axios.post(USER_API_BASE_URL + '/login', credentials)
    }
//    getUsers() {
//        return axios.get(USER_API_BASE_URL);
//    }
    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }
    createUserBloodSugar(userId, count) {
        return axios.post(USER_API_BASE_URL + "/${userId}/sugars", { "userId": userId, "count": count });
    }
    searchUserBloodSugar(userId, daysBack) {
        return axios.get(USER_API_BASE_URL + "/${userId}/sugars?daysBack=${daysBack}");
    }
//    getUserById(userId) {
//        return axios.get(USER_API_BASE_URL + '/' + userId);
//    }
//    updateUser(user, userId) {
//        return axios.put(USER_API_BASE_URL + '/' + userId, user);
//    }
//    deleteUser(userId) {
//        return axios.delete(USER_API_BASE_URL + '/' + userId);
//    }
}
export default new UserService()