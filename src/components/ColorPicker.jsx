import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState('#000000')


    return (

        <div className="container-fluid">
            <div className="row colorfondo">
                <div className="picker" style={{ backgroundColor: color }}>
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    Color Picker</div>
            </div>
        </div>

    )
}

export default ColorPicker
