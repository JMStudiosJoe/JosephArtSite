import React, { useState } from 'react'

import DisasterPostDetails from '../DisasterPosDetails/DisasterPostDetails'
import DisasterModalPostDetails from '../DisasterModalPostDetails/DisasterModalPostDetails'

import PostsThumbnailGrid from '../PostsThumbnailGrid/PostsThumbnailGrid'

import './DisasterPosts.css'

function DisasterPosts(props) {
    const defaultState = {
        showModal: false,
        selectedPost: null,
        filterNav: ['Available', 'All'],
        filteredPosts: [],
    }
    const [state, setState] = useState(defaultState)

    const openPostModal = (post) => {
        setState(previousState => {
            return {
                ...previousState,
                showModal: true,
                selectedPost: post,
            }
        })
    }
    
    const postsMockup = (posts, openPostModal) => {
        return posts.sort( (a, b) => {
            return a.order > b.order ? 1 : -1
        }).map( (post, index) => {
            return <DisasterPostDetails key={`post-${index}`} post={post} openPostModal={openPostModal} />;
        })
    }

    const dismissModal = (e) => {
        e.preventDefault()
        setState(prevState => {
            return {
                ...prevState,
                showModal: false,
                selectedPost: null,
            }
        })
    }

    const getModalDetails = () => {
        return <DisasterModalPostDetails
                selectedPost={state.selectedPost}
                handleSelectPost={props.handleSelectPost}
                dismissModal={dismissModal} />
    }

    const filterPosts = (filterItem) => {
        const allPosts = props.posts
        if (filterItem.toLowerCase() === 'all') {
            setState({
                ...state,
                filteredPosts: allPosts,
            })
        }
        else if (filterItem.toLowerCase() === 'available') {
            setState({
                ...state,
                filteredPosts: allPosts.filter(item => item.available),
            })
        }
        else {
            setState({
                ...state,
                filteredPosts: allPosts,
            })
        }
    }
    const thumbsPostsGrid = (posts, openPostModal) => {
        return posts.sort( (a, b) => {
            return a.order > b.order ? 1 : -1
        }).map( (post, index) => {
            return <div key={`thumb-post-${index}`} onClick={(e) => openPostModal(post)} >
                <img src={post.thumb ? post.thumb : post.url} />
            </div>
        })
    }

    const modalDetails = state.showModal ? getModalDetails() : null
    const backdrop = state.showModal ? <div className='backdrop' onClick={ dismissModal }></div> : null
    const postsToDisplay = state.filteredPosts.length > 0 ? state.filteredPosts : props.posts
    const posts = <PostsThumbnailGrid posts={ postsToDisplay } openPostModal={openPostModal} />
    const filterNavItems = state.filterNav.map( (filterItem, index) => {
        return (
            <span key={`filter-item-${index}`} className='filter-nav-item' onClick={(e) => filterPosts(filterItem)}>{ filterItem }</span>
        )
    })
    const loadingMarkup = <div className='loading-gallery'/>
    const content = posts.length === 0 ? loadingMarkup : posts
    return (
        <div className='DisasterPosts'>
            { backdrop }
            { modalDetails }
            <section className='filter-nav'>
                { filterNavItems }
            </section>
            
            <section className='posts-list-container'>
                { content }
            </section>
        </div>
    );
    
}

export default DisasterPosts
