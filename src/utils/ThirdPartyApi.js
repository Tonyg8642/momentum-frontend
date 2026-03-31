const baseUrl = "https://api.escuelajs.co/api/v1/products";

export function getThirdPartyItems() {
  return fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => {
      // 🔥 Transform API data into what your app expects
      return data.slice(0, 12).map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.images?.[0] || "", // take first image
        category: item.category,
      }));
    });
}
