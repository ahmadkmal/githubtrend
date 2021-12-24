import axios from "axios";
const statsError=[400,404,401,500]
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });
  instance.interceptors.response.use(response => {
    return response;
 },
  error => {
   if (statsError.includes(error.response?.status)) {
    return Promise.reject(error.response)
   }
   return error.response;
 }
 );
  //  instance.defaults.headers.post['Accept'] = 'application/json'
  //  instance.defaults.withCredentials=true
  //  xsrfCookieName: 'csrftoken_testtest',
  //  xsrfHeaderName: 'X-CSRFToken',
  //  instance.defaults.xsrfHeaderName='token'
  //  instance.defaults.xsrfCookieName='token'
//   instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  // Alter defaults after instance has been created
  instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default instance;