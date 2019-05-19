import React from 'react'

import { XCircle } from 'react-feather'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'


export default function DisasterModalPostDetails(props) {
    const post = props.selectedPost
    const postDetailsMarkup = postInformationDetails(post)
    const closeButton = <XCircle size={ 60 } className='close-button' onClick={ props.dismissModal } />
    return (
        <div className='modal-details'>
            { closeButton }
            <section className='disaster-details'>
                { postDetailsMarkup }
            </section>
        </div>
    )
}
