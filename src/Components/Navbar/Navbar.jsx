import React, {useState}from "react"
import './Navbar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div className='navbar'>
            <ul className="nav-menu">
                <li>
                    <HashLink smooth to="/#home" className="hash-link" onClick={() => setMenu("home")}>
                        Home
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#about" className="hash-link" onClick={() => setMenu("about")}>
                        About Me
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#project" className="hash-link" onClick={() => setMenu("project")}>
                        Projects
                    </HashLink>
                </li>
                <li> 
                    <a className="resume" href="/Resumes.zip"download>  
                    <FontAwesomeIcon icon={faDownload} className="icon"/> Download Resumes
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar 