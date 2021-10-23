import React from "react"
import { useParams, Link, Redirect } from "react-router-dom"

const ColorPage = ({colors}) => {
    const { color } = useParams()

    const selectColor = colors.find(c => c === color)
    console.log(colors)
    console.log(selectColor)
    if (!selectColor) {
        return(
            <Redirect to="/colors" />
        )
    }

    return (
        <div style={{ backgroundColor: selectColor }}>
            <h1>{selectColor}</h1>
            <p><Link to="/">Back</Link></p>
        </div>
    )

}

export default ColorPage