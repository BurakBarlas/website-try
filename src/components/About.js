import React from 'react'
import BackGroundImage from '../Assets/BackGroundImage.jpeg';

function About() {
    return (
        <div className="about-container">
            <p>I am Burak barlas. I'm studying at Bahcesehir University in Istanbul. Yet, I'm beginning of my career. 
            I am interested in learning new computer language, trying to improve myself by making new projects.</p>

            <img className="background-image" src={BackGroundImage} alt="Bad Connection Huh!" />
        </div>
    )
}

export default About
