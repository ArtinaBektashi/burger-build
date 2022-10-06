import axios from 'axios';


const instance= axios.create({
    baseURL: 'https://burger-builder-46c89-default-rtdb.firebaseio.com/'
});

export default instance;