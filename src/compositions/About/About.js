import React from 'react'

import './About.css'

function About(props) {
    let about1URL = 'https://s3-us-west-1.amazonaws.com/josephartimages/paintings/MyStudio.jpg'
    return (
        <div className='About'>
            <h2 className='about-title'>About the Artist</h2>
            <h4 className='artist-mission-statement'>Joseph's Paintings are of stories of a moment grasped, while on a journey through a life.</h4>
            <img alt='loading' className='about-image-1' src={ about1URL } />
            <p className='about-para-1'>
            Joseph is a hobbyist oil painter with a passion for landscapes and growing into other subjects. Joseph has always enjoyed seeing captivating landscape paintings that would just capture his attention forget what he was doing and soak in the painting, enjoying the moment. Whether it was watching Bob Ross on PBS as a kid or passing by a gallery in town. It was not until the end of summer in 2017 that Joseph tried a few new hobbies, playing guitar, and painting.
            </p>
            <p className='about-para-2'>
            Joseph followed the path likely everyone else starts with, Bob Ross on YouTube. After a few months of acrylics and various YouTube tutorials on painting with acrylics and color theory, he took a plunge into oil paints. Since then He has grown as the artist he wants to be with a goal to paint light, captivate and move people the way he still is from other artists, old masters and modern.
            </p>
            <p className='about-para-3'>
            Joseph's goal is to stay a hobbyist painter with a devoted growing passion for art that will complement and grow the engineer as well. He will strive to bring people into a short story, make them wonder where the landscape is or where does this path leads to, and above all bring a person into the moment of wondrous illusion.
            </p>
        </div>
    )
}

export default About
