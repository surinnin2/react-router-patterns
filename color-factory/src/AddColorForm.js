import React, { useState } from "react"
import { Link } from "react-router-dom"

const AddColorForm = ({addColor}) => {

    const [formData, setFormData] = useState({color:''})

    const handleChange = evt => {
        const {name, value} = evt.target
        setFormData(fData => ({ 
            ...fData,
            [name]: value 
        }))
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        addColor(formData.color)
        console.log(formData.color)
        setFormData({color:''})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color:</label>
                <input id="color" name="color" onChange={handleChange} type="text" value={formData.color}/>
                <button>Add Color</button>
            </form>
            <Link to="colors">back</Link>
        </div>
    )

}

export default AddColorForm