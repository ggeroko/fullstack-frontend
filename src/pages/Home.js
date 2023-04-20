import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {

    const [ users, setUsers ] = useState([]);
    const [ products, setProducts] = useState([]);

    useEffect(()=>{
        loadUsers();
        loadProducts();
    }, []);

    const loadUsers=async() => {
        const result =await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    };

    const loadProducts = async () =>{
      const result = await axios.get("http://localhost:8080/products")
      setProducts(result.data);
    }

    const deleteUser=async(id) =>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

    function getBranch (data) {
        return data.branch ? data.branch.name : "Not Specified"
    }



  return (
    <div className = 'container'>
        <div className = 'py-4'>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Users</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Branch</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {
              users.map((user,index)=>(
                  <tr>
                      <th scope="row" key={index}>{index +1}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{getBranch(user)}</td>
                      <td>
                        <Link className="btn btn-primary mx-2"to={`/viewuser/${user.id}`}>View</Link>
                        <Link className="btn btn-outline-primary mx-2"to={`/edituser/${user.id}`} >Edit</Link>
                        <button className="btn btn-danger mx-2"onClick={()=>deleteUser(user.id)}>Delete</button>
                      </td>
                  </tr>))}
            </tbody>
            </table>
            <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Products</th>
                <th scope="col"/>
                <th scope="col">Branch</th>
                <th scope="col"/>
              </tr>
              </thead>
            <tbody>
              {
              products.map((product,index)=>(
                <tr>
                  <td>{product.name}</td>
                  <td/>
                  <td>{getBranch(product)}</td>
                  <td/>
                </tr>))}
            </tbody>
          </table>
        </div>
    </div>
  )

}
export default Home
