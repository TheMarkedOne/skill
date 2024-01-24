import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './../components/layouts/Footer.jsx'
import Header from './../components/layouts/Header.jsx'

function Income() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Income & Expenses page </h1>
        <p>Income & Expenses page body content</p>
      </div>
      <Footer />
    </div>
  )
}

export default Income