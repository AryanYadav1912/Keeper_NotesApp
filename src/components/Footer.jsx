import React from 'react'
import '../../public/style.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <p>
            ©️ Aryan {currentYear}
        </p>
    </footer>
  )
}

export default Footer