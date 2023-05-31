import React from 'react'
import style from './student.module.css'
import { Link } from 'react-router-dom'

function Student() {
  return (
    <div id={style.nav}>
        <ol>
            <li><Link to='/stcreate'>Creation Student</Link></li>
            <li><Link to='/stdetails'>Students Data</Link></li>
        </ol>
    </div>
  )
}

export default Student