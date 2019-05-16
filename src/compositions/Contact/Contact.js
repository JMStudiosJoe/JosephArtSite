import React from 'react'


import './Contact.css'



function Contact(props) {
    const email = 'jrichardson@jmstudios.net'
    const instgramURL = 'https://www.instagram.com/eviljoester/'
    const instgramIconURL = 'https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300'
    const patreonURL = 'https://www.patreon.com/artofjoseph'
    const patreonIconURL = 'http://www.stickpng.com/assets/images/5a5a6b7d14d8c4188e0b0888.png'
    return (
        <div className='Contact'>
            <h2 className='title'>Contact the Artist</h2>
            <a className='instagram' href={ instgramURL } target="_blank">
                <img src={ instgramIconURL } />
            </a>
            <a className='patreon' href={ patreonURL } target="_blank">
                <img src={ patreonIconURL } />
            </a>
            <h4 className='email'>Email: { email } <a href={`mailto:${email}`}>Send Mail</a> </h4>
        </div>
    )

}

export default Contact
