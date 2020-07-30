import React from 'react'

import './Home.css'

function Home(props) {
    
    return (
        <div className='Home'>
            <h1 className="title">Welcome to the art of Joseph Richardson</h1>
            <h3 className="quote-one">"We do not paint things, we paint light." - Stefan Baumann</h3>
            <img className="featured-art" src="https://josephartimages.s3-us-west-1.amazonaws.com/paintings/WinterHarvestWeb.png" alt="Loading..." />
            <h3 className="quote-two">Joseph is on a journey to capture moments of light, using oil paints. When you first glance one of his paintings from afar you will be drawn into wonderous moment of light, and when you get closer you will see more depth of what the light is communicating with you. </h3>
            <img className="featured-post" src="https://josephartimages.s3-us-west-1.amazonaws.com/paintings/PopupGallery.png" alt="Loading..." />
        </div>
    )
}

export default Home
