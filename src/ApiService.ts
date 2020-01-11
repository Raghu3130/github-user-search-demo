export class ApiService {
    private URL = 'https://api.github.com'
  
  
    public getUser(username:any){
      return fetch(this.URL+'/users/'+username);
    }
  
    public getRepositories(repoURL:any){
      return fetch(repoURL);
    }
  }
  