import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './student.module.css'

function Editdetails() {
    let [name,setName]=useState("")
    let [collegeName,setCollegeName]=useState("")

    let navigate=useNavigate()

    let {index}=useParams()

    console.log(index);

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((response)=>{
            console.log(response.data);
            setName(response.data.name)
            setCollegeName(response.data.collegeName)
        })
        .catch(()=>{
            console.log("No data is font check");
        })
    },[])

    let nameData=(e)=>{
        e.preventDefault();
        setName(e.target.value)
    }
    let collegeData=(e)=>{
        e.preventDefault();
        setCollegeName(e.target.value)
    }

    let formData=(e)=>{
        let dataLoad={name,collegeName}
        axios.put(`http://localhost:3000/users/${index}`,dataLoad)
        navigate('/stdetails')
    }
  return (
    <div id={style.stdmainForm}>
        <form action="" id={style.stpForm}>
            <u><h3>Upadte Form ...</h3></u><br />
        <label htmlFor="">Student Name</label>
        <input type="text"  value={name} onChange={nameData}/> <br />
        <label htmlFor="">Student College</label>
        <input type="text"  value={collegeName} onChange={collegeData}/> <br />
        <br />
        <button onClick={formData}>Update Profile</button>
        </form>
        
    </div>
  )
}

export default Editdetails