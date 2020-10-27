const baseUrl = 'https://thinkful-list-api.herokuapp.com/BradfordBossen';

const getItems = function () {
    return fetch(`${baseUrl}/items`)
}

const createItem = function(name) {
    const newItem = {
        name: name,
    };
    return fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem)
    });
}

const updateItem = function (id, updateData) {
  const newData = JSON.stringify(updateData);
  return fetch(`${baseUrl}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: newData,
  });
};

export default {
  getItems,
  createItem,
  updateItem
};