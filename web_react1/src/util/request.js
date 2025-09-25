
import axios from 'axios';

//function use to integrate api with react js web
const base_url = "http://localhost:8081/api/";
export const request = (url = "", method = "get", data = {}) => {
    return axios({
        url: base_url + url,
        method: method,
        data: data,
        headers: {}
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        alert("Error Fetch Api");
    });
}