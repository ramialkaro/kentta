import React from 'react'
import {Redirect} from 'react-router-dom'

const Logout =()=>{
    localStorage.clear()
    return setTimeout(() => {
        return <Redirect to="/" />
    }, 200)
}

export default Logout