import React from 'react'

import './About.css'

function About(props) {
    const about1URL = 'https://s3-us-west-1.amazonaws.com/josephartimages/paintings/FullPortrait.png'
    const about2URL = 'https://s3-us-west-1.amazonaws.com/josephartimages/paintings/FishingTripPainting.png'
    
    return (
        <div className='About'>
            <h2 className='about-title'>About the Artist</h2>
            <h4 className='artist-mission-statement'>Joseph's Paintings are of stories of a moment grasped, while on a journey through a life.</h4>
            <img alt='loading' className='about-image-1' src={ about1URL } />
            <img alt='loading' className='about-image-2' src={ about2URL } />
            <p className='about-para-1'>
            Come along on a journey through wonderous discovery of light. Joseph is on a lifelong journey to capture and convey moments of light and shadow, and let the viewer experience their own short story through his paintings. Through Joseph’s passion for learning, he grows from every painting, drawing, and moment he is brought towards light on his journey to becoming a master painter.
            </p>
            <p className='about-para-2'>
            Joseph’s paintings are metaphoric stories that stir with the viewer into their own short story through light. Gazing upon Josephs’ original paintings, through his brushstrokes and paint application, the viewer will experience a conversation with Joseph, on what story they were brought into, whether it be a memory, a moment, or just a feeling, and truly change the way the viewer views art.
            </p>
            <p className='about-para-3'>

            </p>
        </div>
    )
}

export default About
