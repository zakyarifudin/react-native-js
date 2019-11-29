import {store} from '../redux/store';
import {version, client, server_url} from '../../package.json';
import Axios from 'axios';

export const APP_VERSION = version;

export const baseUrl = () => {
  // return localStorage.getItem('server');
  return server_url;
};

export const auth = () => {
  var token = localStorage.getItem('bearer');
  if (token !== null) {
    return token;
  }

  return null;
};

export const userData = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};

export const get = async url => {
  url += (url.includes('?') ? '&APP_VERSION=' : '?APP_VERSION=') + APP_VERSION;
  return await fetch(baseUrl() + 'api/' + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth(),
    },
  })
    .then(res => res.json())
    .then(res => {
      if (res.status_text === 'unauthenticated') {
        store.dispatch({
          type: 'LOGOUT',
          payload: {quit: false},
        });
        window.location.replace('./#/signin');
        return res;
      } else {
        return res;
      }
    })
    .catch(error => console.log(error));
};

export const axiosGet = async url => {
  url += (url.includes('?') ? '&APP_VERSION=' : '?APP_VERSION=') + APP_VERSION;
  return await Axios({
    method: 'GET',
    url: baseUrl() + 'api/' + url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth(),
    },
    timeout: 0,
  }).then(res => res.data);
};

//get No Auth
export const getNoAuth = url => {
  url = baseUrl() + 'api/' + url;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }

        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

//get No Auth tanpa api/
export const getNoAuthApi = url => {
  url = baseUrl() + url;
  //console.log(url);
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .catch(error => console.log(error));
};

// post
export const post = async (url, post) => {
  let body = {...post, APP_VERSION: APP_VERSION};

  return await fetch(baseUrl() + 'api/' + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth(),
    },

    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => {
      if (res.status_text === 'unauthenticated') {
        store.dispatch({
          type: 'LOGOUT',
          payload: {quit: false},
        });
        window.location.replace('./#/signin');
        return res;
      } else {
        return res;
      }
    })
    .catch(error => console.log(error));
};

// post No Auth
export const postNoAuth = (url, post) => {
  url = baseUrl() + 'api/' + url;

  return fetch(url, {
    method: 'POST',
    // mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }
        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

export const login = async param => {
  var form = new FormData();
  form.append('client_id', client.client_id);
  form.append('client_secret', client.client_secret);
  form.append('grant_type', 'password');
  form.append('username', param.username);
  form.append('password', param.password);
  form.append('APP_VERSION', APP_VERSION);

  return await fetch(baseUrl() + 'oauth/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    },
    body: form,
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
};

export const signout = async () => {
  return await fetch(baseUrl() + 'api/user/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.getItem('bearer2'),
    },
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
};

export const loginJWT = param => {
  var form = new FormData();
  form.append('email', param.email);
  form.append('password', param.password);

  let url = baseUrl() + 'api/jwt/login';

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    },
    body: form,
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }
        return Promise.resolve([]);
      }

      if (response.status > 200) {
        sessionStorage.setItem('error', response.statusText);
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

export const postForm = (url, param) => {
  var form = new FormData();

  Object.keys(param).map(function(value) {
    form.append(value, param[value]);
  });

  url = baseUrl() + 'api/' + url;

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept:
        'application/json, application/xml, text/plain, text/html, multipart/form-data,*.*',
      Authorization: auth(),
    },
    body: form,
  })
    .then(res => res.json())
    .then(res => {
      if (res.status_text === 'unauthenticated') {
        store.dispatch({
          type: 'LOGOUT',
          payload: {quit: false},
        });
        window.location.replace('./#/signin');
        return res;
      } else {
        return res;
      }
    })
    .catch(error => console.log(error));
};

// put
export const put = async (url, post) => {
  let body = {...post, APP_VERSION: APP_VERSION};

  return await fetch(baseUrl() + 'api/' + url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth(),
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => {
      if (res.status_text === 'unauthenticated') {
        store.dispatch({
          type: 'LOGOUT',
          payload: {quit: false},
        });
        window.location.replace('./#/signin');
        return res;
      } else {
        return res;
      }
    })
    .catch(error => console.log(error));
};

// put No Auth
export const putNoAuth = (url, post) => {
  url = baseUrl() + 'api/' + url;

  return fetch(url, {
    method: 'PUT',
    // mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }
        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

// delete atau destroy
export const destroy = url => {
  url = baseUrl() + 'api/' + url;

  return fetch(url, {
    method: 'DELETE',
    // mode : 'no-cors',
    // credentials:'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth(),
    },
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }

        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

// getLanguage
export const currLanguage = () => {
  const lang = localStorage.getItem('language');
  return lang;
};

// changelanguage
export const changeLanguage = lang => {
  localStorage.setItem('language', lang);
};

// delete atau destroy no Auth
export const destroyNoAuth = url => {
  url = baseUrl() + 'api/' + url;

  return fetch(url, {
    method: 'DELETE',
    // mode : 'no-cors',
    // credentials:'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }

        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};
