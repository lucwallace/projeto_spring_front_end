import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from '../src/pages/login';
import ErroPage from './pages/erroPage';
import Home from '../src/pages/home';
import CadastroUsuario from './pages/cadastroUsuario';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErroPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/login",
        element: <Login/>
      },

      {
        path: "/CadastroUsuario",
        element: <CadastroUsuario/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
