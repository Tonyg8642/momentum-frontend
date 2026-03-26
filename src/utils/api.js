// function to get items from backend
export function getItems() {
  return fetch("http://localhost:3001/items")
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }

      return res.json();
    })

    .catch((err) => {
      console.error("API error:", err);
      throw err;
    });
}
