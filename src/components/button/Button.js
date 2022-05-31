import React from 'react'
import './Button.scss'

function Button({ children, secondary = false, ...props }) {
    return (
        <button {...props} className={`button ${secondary ? 'secondary' : ''}`}>{children}</button>
    )
}

export default Button