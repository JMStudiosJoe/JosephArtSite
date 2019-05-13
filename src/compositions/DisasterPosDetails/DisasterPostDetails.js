import React from 'react'

import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'


export default function DisasterPostDetails(props) {
    const post = props.post
    const {
        title,
    } = post
    const markup = contactDetailsMarkup(post)
    const contactDetails = <aside className='contact-details'>
        { markup }
    </aside>
    
    const postInfoMarkup = postInformationDetails(post)
    return (
        <div className='post-details' onClick={ (e) => props.openPostModal(post) }>
            <section className='disaster-details'>
                { postInfoMarkup }
            </section>
            { contactDetails }
        </div>
    )
}