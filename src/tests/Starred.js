class Users {
  api() {
    return fetch("https://api.github.com/users/simonelopess/starred").then(
      (response) => {
        return response.json();
      }
    );
  }
}

export default Users;
