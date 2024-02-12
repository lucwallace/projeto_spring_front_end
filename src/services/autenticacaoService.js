import axios from "axios";

const API_URL = "http://localhost:8081/api/auth/";

const register = (username, email, password) => {
  console.log("Teste01 "+username)
  console.log("Teste02 "+email)
  console.log("Teste01 "+password)

  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  console.log("Estou AQUI 1")
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        console.log("Estou AQUI 2")
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AutenticationService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AutenticationService;