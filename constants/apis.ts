const API_URL_SVOD = '/securedapp/api/';
const domain = 'https://testing.mifteam.com'
const API_URL_MUSIC =  'https://testing.mifteam.com/musicsecuredapp/api/';


function getFullAPI(SVOD: boolean, url: string){
    if(process.env.ENVIROMENT === 'DEV') {
       if(SVOD) {
        return domain + API_URL_SVOD + url
       } else {
        return domain + API_URL_MUSIC + url
       }
    } else {
        if(SVOD) {
            return API_URL_SVOD + url
           } else {
            return  API_URL_MUSIC + url
           }
        
    }
}

export const Apis = {
    GET_PACKAGES: getFullAPI(true, 'Subscriptions/GetSubscriptions'),
    GET_PRIVACY: getFullAPI(true, 'Legal/GetPrivacyPolicy'),
    Authorize: getFullAPI(true, 'Id/Authorize'),
    GET_PROMOTED_RAILS: getFullAPI(true, 'NotRegistered/GetPromoted') ,
    GET_SERIES_DETAILS : getFullAPI(true, 'v3/Series/GetSerieDetails') ,
    LOGIN: getFullAPI(true, 'Auth/login'),
    GET_PROFILES : getFullAPI(true, 'Profiles/GetMyProfiles'),
    IS_LOGGED_IN: getFullAPI(true, 'Users/IsLoggedIn')
}