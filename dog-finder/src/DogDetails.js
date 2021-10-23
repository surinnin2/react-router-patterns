import React from "react"
import { useParams, Link } from "react-router-dom"


const DogDetails = ({dogs}) => {
    const { dogName } = useParams()
    
    if (dogName) {
        const dog = dogs.find(d => d.name.toLowerCase() === dogName.toLowerCase())
    
        return (
            <div>
                <h1>It's {dog.name}!</h1>
                    <p>name: {dog.name}</p>
                    <p>age: {dog.age}</p>
                    <img src={dog.src} alt={dog.name}></img>
                    {dog.facts.map(f => {
                        return(<p>{f}</p>)
                    })}
                <Link to="/dogs">Back</Link>
            </div>
        )
    }
    return null
}

export default DogDetails