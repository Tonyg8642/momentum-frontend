const baseUrl = "https://api.escuelajs.co/api/v1/products";

function sanitizeImage(raw) {
  if (!raw) return "";
  // API sometimes returns images as a stringified array e.g. '["https://..."]'
  const cleaned = String(raw)
    .trim()
    .replace(/^\["?|"?\]$/g, "");
  return cleaned.startsWith("http") ? cleaned : "";
}

export function getThirdPartyItems() {
  return fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => {
      return data.slice(0, 12).map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: sanitizeImage(item.images?.[0]),
        category: item.category,
      }));
    });
}
