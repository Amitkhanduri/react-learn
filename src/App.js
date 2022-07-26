import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetail from "./components/Product/ProductDetail";
import TodoList from "./components/Dashboard/TodoList";

function App() {
  return (
    <div>
      <div className='main-container'>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Dashboard/>}>
              </Route>
              <Route path="/product/:id" element={<ProductDetail/>}>
              </Route>
              <Route path="/todo" element={<TodoList/>}>
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
