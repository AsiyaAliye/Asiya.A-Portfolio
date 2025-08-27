import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import './Header.css'
import pfp from './../../assets/pfp.jpeg'


const Header = () => {
    return (
        <section id="home" className='header'>
            <div className="container">
                <div className="header-section">
                    <img src={pfp} alt="pfp"/>
                    <h1>Hi! I'm <span>Asiya Aliye, </span>software developer and data analyst based in USA.</h1>
                    <div class="icons">
                        <li>
                            <a href="https://www.linkedin.com/in/asiya-aliye" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/AsiyaAliye" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header 