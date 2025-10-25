import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'

import "../../style/footer.css"

export default function Footer() {
  return (
    <footer>
        <img src="../assets/White_Logo.png" alt="MP Partners Logo" />
        <div id="social-icons">
            <p>Follow us</p>
            <a href="https://www.linkedin.com/company/mp-partners-advisory/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareLinkedin} className='social-icon'/>
            </a>
        </div>
        <p>Navigating what's next for startups and alternative industries</p>
        <p>© 2025 MP Partners. All rights reserved.</p>
        
    </footer>
  )
}
