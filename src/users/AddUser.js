import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddUser = () => {

    let navigate=useNavigate()

    
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        loadBranches();
    },[])

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        branch_id:"1"
    })


    const {name,username,email,branch_id}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const changeDropdown=(e)=>{
        setUser({...user,branch_id:e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/")
    }

    const loadBranches = async() =>{
        const result = await axios.get("http://localhost:8080/branches");
        setBranches(result.data);
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center-m4'>Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor = "Name" className='form-label'>
                        Name
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    placeholder='Enter your Name'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                <label htmlFor = "Username" className='form-label'>
                        Username
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    placeholder='Enter your Username'
                    name='username'
                    value={username}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor = "Email" className='form-label'>
                        Email
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    placeholder='Enter your Email'
                    name='email'
                    value={email}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-1'>
                    <label htmlFor = "branch_id" className='form-label'>
                        Branch
                    </label>
                </div>
                <>         
                <select value = {user.branch_id ? user.branch_id : branches[0]} onChange={(e) => changeDropdown(e)}label = "Branches">
                    {branches.map((currentBranch) => (
                        <option value = {currentBranch.id}>{currentBranch.name}</option>
                    ))}
                </select>
                <br/>
                <br/>
                </>        
                <button type="submit" className='btn btn-outline-primary'>
                    Submit
                </button>
                <Link  className='btn btn-outline-danger mx-2' to="/">
                    Cancel
                </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
export default AddUser
