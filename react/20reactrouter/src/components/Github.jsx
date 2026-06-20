import React from 'react'

const Github = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch("https://api.github.com/users/devjigar")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="grid grid-cols-2">
            <div className="text-center py-8 bg-gray-300"> Github Follower:</div>
            <div className="text-center w-full p-4"> Ashs</div>
        </div>
    )
}

export default Github