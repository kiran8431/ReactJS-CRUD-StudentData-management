import React, { useState } from 'react'
import style from './student.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function StudentProfile() {
    let [name,setName]=useState("")
    let [collegeName,setCollegeName]=useState("")

    let navigat=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let collegeData=(e)=>{
        setCollegeName(e.target.value)
    }

    let formhandle=(e)=>{
        e.preventDefault();
        let payLoad={name,collegeName}
        axios.post("http://localhost:3000/users",payLoad)
        .then(()=>{
            console.log("Data  is sent ");
        })
        .catch(()=>{
            console.log("NOt sent");
        })

        navigat('/stdetails')

    }

  return (
    <div id={style.stdmainForm}>
        <form action="" id={style.stpForm}>
            <u><h3>Register form ...</h3></u><br /><br />
        <label htmlFor="">Student Name</label>
        <input type="text"  value={name} onChange={nameData}/> <br />
        <label htmlFor="">Student College</label>
        <input type="text"  value={collegeName} onChange={collegeData}/> <br />
        <button onClick={formhandle}>Create Profile</button>
        </form>
        
    </div>
  )
}

export default StudentProfile