import Axios from './dataservice.js';

export default {
    getAllBlog() {
        return Axios.get('/blog')
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                return Promise.reject(err.response);
            })
    }

}