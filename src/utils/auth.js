export function authorize(email, password) {
  return new Promise((resolve) => {
    resolve({
      token: "fake-jwt-token",
    });
  });
}

export function register(name, email, password) {
  return new Promise((resolve) => {
    resolve({
      data: {
        name,
        email,
        _id: "fake-user-id-123",
      },
    });
  });
}

export function checkToken(token) {
  return new Promise((resolve, reject) => {
    if (token) {
      resolve({
        data: {
          name: "Tony",
          email: "fake@example.com",
          _id: "fake-user-id-123",
        },
      });
    } else {
      reject(new Error("Invalid token"));
    }
  });
}
