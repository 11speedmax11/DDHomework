const app = document.querySelector("#app");
const urlPart = "http://45.12.239.156:8081/api/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFmMjRkNzI4Nzk3MmNlODY3NmYzNiIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjg3NTEyMTQ0LCJleHAiOjE2ODc1OTg1NDR9.O_Ov_uaLNit32vNjB-uVWiLexbwqUGZhWaGMBxltljE"
let _id = "";
let _idTask = "";
let author = "";

export const installEvent = () => {
  mouseLeaveEvent();

  app.addEventListener("click", function (e) {
    clickItemNavigation(e);
    clickButtonNavigation(e);
    clickCardMenu(e);

    createProjectXML("проект 1", "1", e);
    getProjectXML(e);
    deleteProjectXML(e);
    updateProjectXML("другой проект 1", "11", e);

    createProjectFetch("проект 2", "2", e);
    getProjectFetch(e);
    updateProjectFetch("другой проект 2", "22", e);
    deleteProjectFetch(e);

    createProjectAxios("проект 3", "3", e);
    getProjectAxios(e);
    updateProjectAxios("другой проект 3", "33", e);
    deleteProjectAxios(e);

    createTaskXML("задача 1", "описание 1", e);
    getTaskXML(e);
    deleteTaskXML(e);
    updateTaskXML("задача 11", "описание 11", e);

    createTaskFetch("задача 2", "описание 2", e);
    getTaskFetch(e);
    updateTaskFetch("задача 22", "описание 22", e);
    deleteTaskFetch(e);

    createTaskAxios("задача 3", "описание 3", e);
    getTaskAxios(e);
    updateTaskAxios("задача 33", "описание 33", e);
    deleteTaskAxios(e);
  });
}

function clickItemNavigation(e) {
  let navigationItem = e.target.closest('.navigation__item');
  if (navigationItem) {
    if (!navigationItem.classList.contains('active')) {
      app.querySelector('.navigation__item.active').classList.remove('active');
      navigationItem.classList.add('active');

      switch (navigationItem.textContent) {
        case "Проекты":
          app.querySelector('main > div.active').classList.remove('active');
          app.querySelector('.project').classList.add('active');
          break;
        case "Задачи":
          app.querySelector('main > div.active').classList.remove('active');
          app.querySelector('.task').classList.add('active');

          break;
        case "Пользователи":
          app.querySelector('main > div.active').classList.remove('active');
          app.querySelector('.user').classList.add('active');
          break;
      }

    }
  }
}

function clickButtonNavigation(e) {
  let headerItem = e.target.closest('.header__button');
  if (headerItem) {
    if (!e.target.closest('.header__dropdownMenu')) {
      headerItem.classList.toggle("active");
    }
  } else {
    let element = document.querySelector('.header__button');
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  }
}

function clickCardMenu(e) {
  let cardItem = e.target.closest('.card__menu');
  if (cardItem) {
    if (!e.target.closest('.card__dropdownMenu'))
      cardItem.classList.toggle("active");
  } else {
    let element = document.querySelectorAll('.card__menu');
    for (let el of element) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    }
  }
}

function mouseLeaveEvent() {
  let cardItem = document.querySelectorAll(".card__item");
  for (let element of cardItem) {
    element.addEventListener('mouseleave', function (e) {
      let menuItem = document.querySelectorAll(".card__menu");
      for (let el of menuItem) {
        if (el.classList.contains('active'))
          el.classList.remove('active');
      }
    })
  }
}



function getProjectXML(e) {
  let navigationItem = e.target.closest('.project .get__XML');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects/${_id}`;
      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("GET", url);
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr.send();
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const project = xhr.response;
          console.log(project);
        } else {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
      };
    } else {
      console.log("Создайте проект");
    }
  }
}

function createProjectXML(name, code, e) {
  let navigationItem = e.target.closest('.project .create__XML');
  if (navigationItem) {
    const url = urlPart + `projects`;
    const value = {
      "name": name,
      "code": code
    }

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.send(JSON.stringify(value));
    xhr.onload = () => {

      if (xhr.status >= 200 && xhr.status < 300) {
        const project = xhr.response;
        author = project.author;
        _id = project._id
        console.log(project);
      } else {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
      }
    };
  }
}

function deleteProjectXML(e) {
  let navigationItem = e.target.closest('.project .delet__XML');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects/${_id}`;
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('DELETE', url);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log(`Проект удален ${_id}`);
          _id = "";
        } else {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
      };
    } else {
      console.log("Создайте проект");
    }
  }
}

function updateProjectXML(name, code, e) {
  let navigationItem = e.target.closest('.project .edit__XML');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects`;
      const xhr = new XMLHttpRequest();
      const project = {
        _id: _id,
        name: name,
        code: code
      };

      xhr.open('PUT', url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(JSON.stringify(project));
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = xhr.response;
          console.log(response);
        } else {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
      };
    } else {
      console.log("Создайте проект");
    }
  }
}



function createProjectFetch(name, code, e) {
  let navigationItem = e.target.closest('.project .create__Fetch');
  if (navigationItem) {
    const url = urlPart + `projects`;
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, code })
    };

    fetch(url, options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        author = data.author;
        _id = data._id;
        console.log(data);
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  }
}

function getProjectFetch(e) {
  let navigationItem = e.target.closest('.project .get__Fetch');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects/${_id}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте проект");
    }
  }
}

function updateProjectFetch(name, code, e) {
  let navigationItem = e.target.closest('.project .edit__Fetch');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects`;
      const data = {
        "_id": _id,
        "name": name,
        "code": code
      }

      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте проект");
    }
  }
}

function deleteProjectFetch(e) {
  let navigationItem = e.target.closest('.project .delet__Fetch');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects/${_id}`;
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
        .then(() => {
          console.log(`Проект удален ${_id}`);
          _id = "";
        })
        .catch(error => console.error('Возникла проблема:', error.message));
    } else {
      console.log("Создайте проект");
    }
  }
}



function createProjectAxios(name, code, e) {
  let navigationItem = e.target.closest('.project .create__Axios');
  if (navigationItem) {
    axios.post(urlPart + `projects`, {
      name: name,
      code: code
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        author = response.data.author;
        _id = response.data._id;
        console.log(response.data);
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  }
}

function getProjectAxios(e) {
  let navigationItem = e.target.closest('.project .get__Axios');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects/${_id}`;
      axios({
        method: 'get',
        url: url,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте проект");
    }
  }
}

function updateProjectAxios(name, code, e) {
  let navigationItem = e.target.closest('.project .edit__Axios');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects`;
      axios({
        method: "PUT",
        url: url,
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
        data: {
          "_id": _id,
          "name": name,
          "code": code
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте проект");
    }
  }
}

function deleteProjectAxios(e) {
  let navigationItem = e.target.closest('.project .delet__Axios');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `projects/${_id}`;
      axios({
        method: 'DELETE',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
        .then(() => {
          console.log(`Проект удален ${_id}`);
          _id = "";
        })
        .catch(error => console.error('Возникла проблема:', error.message));
    } else {
      console.log("Создайте проект");
    }
  }
}



function createTaskXML(name, description, e) {
  let navigationItem = e.target.closest('.task .create__XML');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `tasks`;
      const value = {
        name: name,
        description: description,
        projectId: _id,
        executor: author
      }

      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr.send(JSON.stringify(value));
      xhr.onload = () => {

        if (xhr.status >= 200 && xhr.status < 300) {
          const project = xhr.response;
          _idTask = project._id
          console.log(project);
        } else {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
      };
    } else {
      console.log("Создайте проект");
    }
  }
}

function getTaskXML(e) {
  let navigationItem = e.target.closest('.task .get__XML');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks/${_idTask}`;
      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("GET", url);
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr.send();
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const task = xhr.response;
          console.log(task);
        } else {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
      };
    } else {
      console.log("Создайте задачу");
    }
  }
}

function deleteTaskXML(e) {
  let navigationItem = e.target.closest('.task .delet__XML');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks/${_idTask}`;
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('DELETE', url);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log(`Задача удален ${_id}`);
          _idTask = "";
        } else {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
      };
    } else {
      console.log("Создайте задачу");
    }
  }
}

function updateTaskXML(name, description, e) {
  let navigationItem = e.target.closest('.task .edit__XML');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks`;

      const xhr = new XMLHttpRequest();
      const project = {
        _id: _idTask,
        name: name,
        description: description,
        projectId: _id,
        executor: author,
        status: "IN_PROCESS"
      };

      xhr.open('PUT', url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(JSON.stringify(project));
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = xhr.response;
          console.log(response);
        } else {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
      };
    } else {
      console.log("Создайте задачу");
    }
  }
}



function createTaskFetch(name, description, e) {
  let navigationItem = e.target.closest('.task .create__Fetch');
  if (navigationItem) {
    if (_id.length > 0) {
      const url = urlPart + `tasks`;
      const options = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          description: description,
          projectId: _id,
          executor: author
        })
      };

      fetch(url, options)
        .then(response => {
          return response.json();
        })
        .then(data => {
          _idTask = data._id;
          console.log(data);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте проект");
    }
  }
}

function getTaskFetch(e) {
  let navigationItem = e.target.closest('.task .get__Fetch');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks/${_idTask}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте задачу");
    }
  }
}

function updateTaskFetch(name, description, e) {
  let navigationItem = e.target.closest('.task .edit__Fetch');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks`;
      const data = {
        _id: _idTask,
        name: name,
        description: description,
        projectId: _id,
        executor: author,
        status: "IN_PROCESS"
      }

      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте задачу");
    }
  }
}

function deleteTaskFetch(e) {
  let navigationItem = e.target.closest('.task .delet__Fetch');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks/${_idTask}`;
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(`Задача удалена ${_id}`);
          _idTask = "";
        })
        .catch(error => console.error('Возникла проблема:', error.message));
    } else {
      console.log("Создайте задачу");
    }
  }
}


function createTaskAxios(name, description, e) {
  let navigationItem = e.target.closest('.task .create__Axios');
  if (navigationItem) {
    if (_id.length > 0) {
      axios.post(urlPart + `tasks`, {
        name: name,
        description: description,
        projectId: _id,
        executor: author
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          _idTask = response.data._id;
          console.log(response.data);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте проект");
    }
  }
}

function getTaskAxios(e) {
  let navigationItem = e.target.closest('.task .get__Axios');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks/${_idTask}`;
      axios({
        method: 'get',
        url: url,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте задачу");
    }
  }
}

function deleteTaskAxios(e) {
  let navigationItem = e.target.closest('.task .delet__Axios');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks/${_idTask}`;
      axios({
        method: 'DELETE',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
        .then(() => {
          console.log(`Проект удален ${_id}`);
          _idTask = "";
        })
        .catch(error => console.error('Возникла проблема:', error.message));
    } else {
      console.log("Создайте задачу");
    }
  }
}

function updateTaskAxios(name, description, e) {
  let navigationItem = e.target.closest('.task .edit__Axios');
  if (navigationItem) {
    if (_idTask.length > 0) {
      const url = urlPart + `tasks`;
      axios({
        method: "PUT",
        url: url,
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
        data: {
          _id: _idTask,
          name: name,
          description: description,
          projectId: _id,
          executor: author,
          status: "IN_PROCESS"
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Возникла проблема:', error);
        });
    } else {
      console.log("Создайте задачу");
    }
  }
}