const baseUrl = 'https://thinkful-list-api.herokuapp.com/BradfordBossen';

	
const listApiFetch = function (...args) {
    let error;
    return fetch(...args)
      .then(res => {
          if(!res.ok) {
              error = {code: res.status};
              if(!res.headers.get('content-type').includes('json')) {
                  error.message = res.statusText;
                  return Promise.reject(error);
              }
          }
          return res.json();
      })
      .then (data => {
          if(error) {
              error.message = data.message;
              return Promise.reject(error);
          }
          return data;
      });
};
const getItems = function () {
    return listApiFetch(`${baseUrl}/items`);
}

const createItem = function(name) {
    const newItem = {
        name: name,
    };
    return listApiFetch(`${baseUrl}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
}

const updateItem = function (id, updateData) {
  const newData = JSON.stringify(updateData);
  return listApiFetch(`${baseUrl}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: newData,
  });
};

const deleteItem = function(id) {
     return listApiFetch(`${baseUrl}/items/${id}`, {
       method: "DELETE",
     });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};