import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddUser } from "./components/AddUser";
import { Home } from "./components/Home";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";
import { EditUser } from './components/EditUser';

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App