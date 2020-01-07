const baseURL = 'https://a9uje7qdhe.execute-api.ap-southeast-2.amazonaws.com/dev/';
const axios = require('axios').create({
  baseURL, //api baseURL
  timeout: 10000,
  maxContentLength: 2000
});

// get
export const _get = req => {
  return axios.get(req.url, { params: req.data });
};

// post
export const _post = req => {
  return axios({ method: 'post', url: `/${req.url}`, data: req.data });
};

//update
export const _put = req => {
  return axios({ method: 'put', url: `/${req.url}`, data: req.data });
};

//delete
export const _delete = req => {
  return axios({ method: 'delete', url: `/${req.url}`, data: req.data });
};
