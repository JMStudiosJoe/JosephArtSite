import React from 'react'

import './DisasterInformationMarkup.css'

const postInformationDetails = (informDetails = {}, handler = () => {}, edit = false) => {
    const {
        title,
        description,
        price,
        available,
        url,
        orientation,
        prints,
    } = informDetails
    const editPostDetailsMarkup = (
        <section className='inform-details'>
            <section className='title'>
                <label htmlFor='title'>title:</label>
                <input onChange={handler} value={ title } type='text' name='title' id='title'/>
            </section>
            <section className='description'>
                <label htmlFor='description'>Description:</label>
                <textarea onChange={handler} value={ description } type='text' name='description' id='description'></textarea>
            </section>
            
            <section>
                <label htmlFor='artImage'>Photo:</label>
                <input type='file' onChange={ handler } id='artImage' />
            </section>
        </section>
    )
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
    const markup = edit ? editPostDetailsMarkup : postDetailsMarkup
    return (
        <section className='PostInformationDetails'>
            { markup }
        </section>
    )
}

export {
    postInformationDetails
}
