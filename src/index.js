import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from '../src/pages/components/login-component/Login';
import ErroPage from './pages/erroPage';
import Home from '../src/pages/home';
import CadastroUsuario from './pages/cadastroUsuario';
import Register from '../src/pages/components/register-component/Register'
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/login",
        element: <Login />
      },

      {
        path: "/register",
        element: <Register />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
const container = document.getElementById("root");

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
