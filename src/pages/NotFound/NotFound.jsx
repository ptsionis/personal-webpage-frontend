import React from 'react'
import { Link } from 'react-router-dom'

import SpotifyPlayer from '../../components/SpotifyPlayer/SpotifyPlayer'

import './NotFound.css'
import Starfield from '../../components/Starfield/Starfield'

const NotFound = () => {
  return (
    <div className="wrapper">
      <Starfield />
      <main className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="page-header">404</h1>
        <Link className="back-to-home m-4 p-3 text-decoration-none" to={'/'}>
          BACK TO HOME
        </Link>
        <SpotifyPlayer />
      </main>
    </div>
  )
}

export default NotFound
