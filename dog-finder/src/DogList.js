import React from "react"
import { NavLink } from "react-router-dom"

const DogList = ({dogs}) => {
    
    return  (
        <div>
            <h1>Dog-Finder</h1>
            <nav className="Navbar">
                {dogs.map(dog => 
                    (<NavLink exact to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>)
                )}
            </nav>
        </div>
    )
}

export default DogList