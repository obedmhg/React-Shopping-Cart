import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://serverUrl/', headers: {
            "Authorization": "Basic YWRtaW46YWRtaW4=",
            "Accept-Encoding": "gzip, deflate, br",
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            "Connection": "keep-alive",
            'Content-Type': 'application/json'
        }
    },
);

export default instance;