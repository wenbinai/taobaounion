import axios from 'axios'

// TODO why  携带证书
axios.defaults.withCredentials = true;
//设置超时时间
axios.defaults.timeout = 100000;
export default {


  //1. get请求
  requestGet(url, params = {}) {
    return new Promise(((resolve, reject) => {
      axios.get(url, params)
        .then(res => {
          resolve(res.data)
        }).catch(error => {
        reject(error)
      })
    }))
  },

  //2. post请求
  requestPost(url, params = {}) {
    return new Promise(((resolve, reject) => {
      axios.post(url, params)
        .then(res => {
          resolve(res.data)
        }).catch(error => {
        reject(error)
      })
    }))
  },
  //3. delete请求
  requestDelete(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  //4. put请求
  requestPut(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
