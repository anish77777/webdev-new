import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
    // here params is an object 
    // it will have all the dynamic parameters 
    console.log(params)
    return (
        <div>Welcome {params.username} you are logged in</div>
    )
}

export default User