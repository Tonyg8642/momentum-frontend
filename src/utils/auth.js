export const authorize = () => Promise.resolve({ token: "fake-jwt-token" });

export const checkToken = () =>
  Promise.resolve({ name: "Tony", avatar: "https://i.pravatar.cc/150" });

export const register = (name, email) =>
  Promise.resolve({ name, email, _id: "fake-user-id-123" });
