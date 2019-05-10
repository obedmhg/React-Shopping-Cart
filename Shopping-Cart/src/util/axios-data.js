import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://ccstore-z31a.oracleoutsourcing.com/', headers: {
            "Authorization": "Basic YWRtaW46YWRtaW4=",
            "Accept-Encoding": "gzip, deflate, br",
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            "Connection": "keep-alive",
            'Content-Type': 'application/json',
            "X-CCPriceListGroup": "defaultPriceGroup",
            "X-CCProfileType": "storefrontUI",
            "X-ccsite": "siteUS",
            "X-CCViewport": "lg",
            "X-Requested-With": "XMLHttpRequest",
            "Cookie": "BIGipServerccstore-z31a_oracleoutsourcing_com_http=4121645185.40467.0000; xdtz31a0c0_200002=1159VyYfE-4kh1yiD7EJs8r4DhTkJ_xnpPyDKKQ925lnXdgBAD1; xdtz31a0c0_200003=1159Q40AIoxMvXWlGOcHfNd6KYDYwV3EiHyWv3lFlJpIaMMF9AB; _ga=GA1.2.1624518397.1549383410; atgPlatoStop=1; xdtzc4a0c0_siteUS=12BEJicJZ5OjIZi1XAderyfndkH5-f-YAv7MKqfqiX032Qo96A1; xdtz2la0c0_siteUS=13CDsCi3ZfIJPSNOKHAFjWi6E-YI-jsmoXr70x5N4AZTp88284D; occsRecPricelistGroupId=%22defaultPriceGroup%22; occsRecCurrencyCode=%22USD%22; occsRecSendCart=%22false%22; oauth_token_secret-storefrontUI=; _gid=GA1.2.1122050810.1556901499; xdtz5ka0c0_siteUS=113557EggfqLhJLOMCCFSoGZevmPtO3yRONoB2nprG2cIS4A26B%3A1556901746332%3A1556901746332%3A1556901746332%3A1%3A1; xdtz10a0c0_siteUS=1362aLpJ3vbvzb9prkL-MGNWeapVr2FxUNyY0peirNtQ-bUBCC4%3A1556901494582%3A1556913023355%3A1556924551384%3A4%3A4; xdtz4ja0c0_siteUS=1362cbxx2KgfrWYD7TPuLirZhPh41DQPtkqE5kbhz5Zdiks3A31%3A1556901531372%3A1556913090056%3A1556924618233%3A4%3A4; xdtz31a0c0_siteUS=1159ZMdHdPdvrmpP1_aoqvN-5AGs7-B-lOHohFUWztgKdTk35E9%3A1556901020712%3A1556924105361%3A1556942148305%3A5%3A5; atgRecVisitorId=1159ZMdHdPdvrmpP1_aoqvN-5AGs7-B-lOHohFUWztgKdTk35E9; JSESSIONID=fM2BGyitPvFVStZ1zto587kXdS_qlg7h1YzRyhZpiUDUhFgD2OFY!-1481393454"
        }
    },
);

export default instance;