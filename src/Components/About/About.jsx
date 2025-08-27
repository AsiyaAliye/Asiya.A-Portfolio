import React from "react"
import './About.css'
import swimPic from '../../assets/swimming.jpg'
import rockC from '../../assets/rockClimbing.png'
import cafe from '../../assets/cafe.jpeg'
import coffeeart from '../../assets/coffeeart.jpg'

const About = () => {
    return (
        <section id="about" className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <p>
                    Hi! My name is Asiya Aliye, and I’m a proud first-generation Computer Science graduate from Arizona State University.
                    During my undergraduate studies, I earned the Dean’s Award for maintaining a GPA above 3.50 and demonstrating high 
                    academic excellence. I also co-founded and served as the Community Service Chair for the Black Students in Computer
                    Science club at ASU, where I worked to build my community and create opportunities for engagement and growth. In my senior 
                    year, I interned at Irule TV Kids, collaborating closely with stakeholders and my team to design an interactive fashion 
                    boutique app that helps kids develop entrepreneurial skills in a fun and engaging way. 

                    Outside of my career, I enjoy exploring new experiences, whether it’s the 
                    problem-solving of rock climbing, discovering local cafés, or the relaxtion I find in swimming. 
                    I value activities that push me to grow, keep me curious, and bring balance to my day-to-day life.
                    </p>
                </div>
                <div className="about-right">
                    <img src={swimPic} alt="swimPic"></img>
                    <img src={rockC} alt="rockC"></img>
                    <img src={cafe} alt="cafe"></img>
                    <img src={coffeeart} alt="coffeeart"></img>
                </div>
            </div>
        </section>
    )
}
export default About 