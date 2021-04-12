class Users {
  api() {
    return fetch("https://api.github.com/users").then((response) => {
      return response.json();
    });
  }
}

export default Users;
