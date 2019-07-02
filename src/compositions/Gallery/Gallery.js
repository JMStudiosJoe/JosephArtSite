import React from 'react'

import './Gallery.css'

export default function Gallery(props) {
    const { name, address, city, state, zipcode, imgURL, url } = props.gallery
    return (
        <div className='Gallery'>
            <img alt='loading' className='gallery-image' src={ imgURL }/>
            <span className='name'>{ name }</span>
            <a href={ url } target='_blank' className='website' >Website</a>
            <span className='address'>{ address }</span>
            <span className='city'>{ city }</span>
            <span className='state'>{ state }</span>
            <span className='zipcode'>{ zipcode }</span>
        </div>
    )
}