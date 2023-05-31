import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './student.module.css'
import { Link } from 'react-router-dom'


function StudentData() {
    
    let[deatils,setdetails]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>{
            setdetails(response.data)
            console.log("Data is fetched");
        })
        .catch(()=>{
            console.log("Data not fetched");
        })
    },[])

    let deleteData=(data)=>{
        axios.delete(`http://localhost:3000/users/${data}`)
        window.location.assign("")
    }

  return (
    <div id={style.maincards} >
        {deatils.map((x)=>{
            return(
                <div id={style.cards}>
                <table>
                    <tr>
                        <td>Student ID</td>
                        <td>:{x.id}</td>
                    </tr><br />
                    <tr>
                        <td>Student Name</td>
                        <td>:{x.name}</td>

                    </tr><br />
                    <tr>
                        <td>Student College</td>
                        <td>:{x.collegeName}</td>
                    </tr><br /><br />
                    <tr>
                        <td id={style.editbtn}><Link to={`/editdetails/${x.id}`}>Edit</Link></td>
                        <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                    </tr>
                </table>
                </div>
            )
        })}

    </div>
  )
}

export default StudentData