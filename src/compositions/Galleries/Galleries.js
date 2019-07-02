import React from 'react'
import Gallery from '../Gallery/Gallery'
import './Galleries.css'

function Galleries(props) {
    const galleries = props.galleries
        ? props.galleries
        : []
    const galleriesMarkup = galleries.length > 0
        ? galleries.map( (gallery, index) => {
            return <Gallery key={`gallery-${index}`} gallery={ gallery } />
        })
        : []
    return (
        <div className='Galleries'>
           { galleriesMarkup }
        </div>
    );
    
}

export default Galleries
