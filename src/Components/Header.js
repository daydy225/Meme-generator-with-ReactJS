import React from 'react'

export default function Header() {
   return (
       <header className="header">
           <img 
           src="../images/Troll-Face.png" 
           alt="" 
           className="header--img"
           />
          
          <h2 className="header--title">
              Meme Generator
          </h2>
          <h4 className="header--project">My third - react project</h4>
       </header>
   )
}