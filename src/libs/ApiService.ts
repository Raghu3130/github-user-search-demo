import { ApiCaller } from "./ApiCaller";
const BASE_URL = 'https://api.github.com';
class APIService {
  static searchUser = (url: string) => {
    const final_url = BASE_URL + url;
    return ApiCaller.httpGet(final_url);
  };
  static searchRepo = (url:string) => {
    return ApiCaller.httpGet(url);
  };
}
  

export default APIService;
