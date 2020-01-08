import React from 'react'

import './PostsThumbnailGrid.css'


function PostsThumbnailGrid (props) {
    const { posts, openPostModal } = props
    const thumbnailGrid = posts.sort( (a, b) => {
            return a.order > b.order ? 1 : -1
        }).map( (post, index) => {
            return <div className="thumbnail" key={`thumb-post-${index}`} onClick={(e) => openPostModal(post)} >
                <img src={post.thumb ? post.thumb : post.url} alt="loading" />
            </div>
        })
    return (
        <div className='PostsThumbnailGrid'>
            { thumbnailGrid }
        </div>
    )
}

export default PostsThumbnailGrid