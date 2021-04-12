class Repos {
  api() {
    return fetch("https://api.github.com/users/mojombo/repos").then(
      (response) => {
        return response.json();
      }
    );
  }
}

export default Repos;
