const urlPart = "http://45.12.239.156:8081/api/";
let headers = {
  'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`,
  'Content-Type': 'application/json'
}
import axios from 'axios';

const requests = {
  getTasks: (data) => {
    const url = urlPart + `tasks/search`;
    return axios({
      method: 'post',
      url: url,
      data: data,
      headers: headers
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });

  },
  getUser: ({ login, password }) => {
    const url = urlPart + `login`;
    return axios({
      method: 'post',
      url: url,
      data: {
        login: login,
        password: password,
      }
    })
      .then(({ data }) => {
        return data.token
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  getStatus: () => {
    const url = urlPart + `statuses`;
    return axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  getUserList: (data) => {
    const url = urlPart + `users/search`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data.users
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  addTask: (data) => {
    const url = urlPart + `tasks`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  editTask: (data) => {
    const url = urlPart + `tasks`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  getProjectList: (data) => {
    const url = urlPart + `projects/search`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  deleteTask: (id) => {
    const url = urlPart + `tasks/${id}`;
    return axios({
      method: 'delete',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return console.log(data)
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  getHistory: (id) => {
    const url = urlPart + `/hystory/${id}`;
    return axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  getComments: (id) => {
    const url = urlPart + `/comments/${id}`;
    return axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  addComment: (data) => {
    const url = urlPart + `/comments`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  editComment: (data) => {
    const url = urlPart + `/comments`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  deleteComment: (id) => {
    const url = urlPart + `/comments/${id}`;
    return axios({
      method: 'delete',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
}

export default requests