import React from 'react'
import Header from './components/header/Header'

function Main({ children }) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    )
}

export default Main