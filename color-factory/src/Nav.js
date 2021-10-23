import React from "react"
import { NavLink, Link } from "react-router-dom"


const Nav = ({colors}) => {
    
    return  (
        <div>
            <h1>Color Factory</h1>
            <nav className="Navbar">
                <ul>
                    {colors.map(color => {
                        return(
                            <li>
                                <NavLink exact to={`/colors/${color}`}>{color}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <h4><Link to="/colors/add">Add Color</Link></h4>
        </div>

    )
}

export default Nav