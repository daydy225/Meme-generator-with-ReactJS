import React from 'react'
import Header from './Components/Header'
import Memes from './Components/Memes'
import './Style.css'

export default function App() {
    return (
        <div className="container">
            <Header />
            <Memes />
        </div>
    )
}