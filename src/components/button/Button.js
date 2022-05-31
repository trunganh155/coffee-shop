import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

function Button({ children, to = '', secondary = false, ...props }) {
    if (to) {
        return (
            <Link to={to} {...props} className={`button ${secondary ? 'secondary' : ''}`}>{children}</Link>
        )
    }
    return (
        <button {...props} className={`button ${secondary ? 'secondary' : ''}`}>{children}</button>
    )
}

export default Button