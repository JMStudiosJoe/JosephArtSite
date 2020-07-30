import React from 'react'
import moment from 'moment'
import './PostsThumbnailGrid.css'


function PostsThumbnailGrid (props) {
    const { posts, openPostModal } = props
    const thumbnailGrid = posts.sort( (a, b) => {
            //return a.order > b.order ? 1 : -1
            if(moment(a.paintedAt).isBefore(b.paintedAt)) {
                return 1
            }
            else if(moment(a.paintedAt).isAfter(b.paintedAt)) {
                return -1
            }
            else {
                return a.order > b.order ? 1 : -1
            }
        }).map( (post, index) => {
            return <div className="thumbnail" key={`thumb-post-${index}`} onClick={(e) => openPostModal(post)} >
                <img src={post.url ? post.url : post.thumb } alt="loading" />
                <section className="thumbnail-details">
                    <h4>{ post.title }</h4>
                </section>
            </div>
        })
    return (
        <div className='PostsThumbnailGrid'>
            { thumbnailGrid }
        </div>
    )
}

export default PostsThumbnailGrid