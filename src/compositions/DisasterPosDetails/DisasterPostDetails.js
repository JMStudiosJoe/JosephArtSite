import React from 'react'

import { getAddressMarkup } from '../../components/AddressMarkup/AddressMarkup'
import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'



export default function DisasterPostDetails(props) {
    const post = props.post
    const postInfoMarkup = postInformationDetails(post)
    return (
        <div className='post-details' onClick={ (e) => props.openPostModal(post) }>
            <section className='disaster-details'>
                { postInfoMarkup }
            </section>
        </div>
    )
}