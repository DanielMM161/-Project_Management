import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from "react-redux";

import { store } from "./redux/store";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import "./App.css";
import Home from './pages/Home/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
