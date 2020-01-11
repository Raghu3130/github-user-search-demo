

export class ApiCaller {

  static httpGet = (url: string) => {
    return new Promise((resolve, reject) => {
      
      fetch(url, { method: 'GET' }).then((resp) => {
        switch(resp.status) {
          case 200: {
            return resp.json();
          }
          case 404: {
            throw resp.statusText
          }
          case 400: {
            throw resp.statusText
          }
          case 500: {
            throw resp.statusText
          }
        }
      }).then(res => {
        resolve(res);
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });
    })
  };

  static httpPost = (data: any, url: string) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        body: data
      }).then(res => {
        switch(res.status) {
          case 200: {
            return res.json();
          }
          case 404: {
            throw res.statusText
          }
          case 400: {
            throw res.statusText
          }
          case 500: {
            throw res.statusText
          }
        }
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  };
}