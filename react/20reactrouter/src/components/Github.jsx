import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     fetch("https://api.github.com/users/anish77777")
    //         .then(response => response.json())
    //         .then(data => setData(data))
    // }, [])
    if (!data) return <div className="text-center py-8 bg-blue-200">Loading...</div>;
    return (
        <div className="grid grid-cols-2">
            <div className="text-center py-8 bg-blue-300"> Github Follower:{data.followers}</div>
            <img src={data.avatar_url} alt="" />
            <div className="text-center w-full p-4"> Ashs</div>
        </div>
    );
}

export default Github
export const fetchGithubUser = async () => {
    return await fetch("https://api.github.com/users/anish77777")
        .then(response => response.json())
        .then(data => data)
}