let savedItems = [
  {
    _id: "1",
    title: "Black Hoodie",
    imageUrl: "https://picsum.photos/300/200?random=1",
    price: 45,
  },
  {
    _id: "2",
    title: "Blue Jacket",
    imageUrl: "https://picsum.photos/300/200?random=2",
    price: 60,
  },
];

export function getItems() {
  return new Promise((resolve) => {
    resolve(savedItems);
  });
}

export function saveItem(item) {
  return new Promise((resolve) => {
    const newItem = {
      _id: Date.now().toString(),
      title: item.title,
      imageUrl: item.images?.[0] || item.imageUrl,
      price: item.price,
    };

    savedItems.push(newItem);
    resolve(newItem);
  });
}

export function deleteItem(itemId) {
  return new Promise((resolve) => {
    savedItems = savedItems.filter((item) => item._id !== itemId);
    resolve({ message: "Deleted" });
  });
}
