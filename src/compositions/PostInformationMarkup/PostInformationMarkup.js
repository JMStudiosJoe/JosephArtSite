import React from 'react'

import './PostInformationMarkup.css'

const postInformationDetails = (informDetails = {}) => {
    const {
        title,
        description,
        price,
        available,
        url,
        orientation,
        prints,
    } = informDetails
    
    const printsMarkup = prints && prints !== '' ? (
        <div className='prints'>
            <a href={ prints } target='_blank' >Prints Availalbe: RedBubble</a>
        </div>
    ): null
    const availableMarkup = available
        ? <section className='available'>
            <span>Painting is available</span>
        </section>
        : <section className='available'>
            <span>Not available</span>
        </section>

    const priceMarkup = available
        ? <section className='price'>
            <span>{ price }</span>
        </section>
        : null
    const postDetailsMarkup = (
        <section className='inform-details'>
            <section className='post-image'>
                <img alt='loading' className={`${orientation}`} src={ url } />
            </section>
            <section className='title'>
                <span>{ title }</span>
            </section>
            <section className='description'>
                <span>{ description }</span>
            </section>
            { printsMarkup }
            { availableMarkup }
            { priceMarkup }
        </section>
    )
    return (
        <section className='PostInformationDetails'>
            { postDetailsMarkup }
        </section>
    )
}

export {
    postInformationDetails
}
