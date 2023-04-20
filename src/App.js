import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import AddBranches from './users/AddBranches';
import AddProducts from './users/AddProducts';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element = {<ViewUser/>}/>
          <Route exact path="/addbranch" element = {<AddBranches/>}/>
          <Route exact path="/addproduct" element = {<AddProducts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
