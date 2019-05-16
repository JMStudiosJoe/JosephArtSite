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

    const postDetailsMarkup = (
        <section className='inform-details'>
            <section className='post-image'>
                <img className={`${orientation}`} src={ url } />
            </section>
            <section className='title'>
                <span>{ title }</span>
            </section>
            <section className='description'>
                <span>{ description }</span>
            </section>
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
