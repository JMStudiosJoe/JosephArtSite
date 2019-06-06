import React, { useState, useEffect } from 'react'

import DisasterPosts from '../../compositions/DisasterPosts/DisasterPosts'
import { getPosts, getGalleries } from '../../api/api'
import About from '../../compositions/About/About'
import Contact from '../../compositions/Contact/Contact'
import Galleries from '../../compositions/Galleries/Galleries'

import './MainContainer.css'

function MainContainer(props) {
    const defaultState = {
        posts: [],
        galleries: [],
        tabIndex: 0,
        tabs: ['Art','Galleries', 'About', 'Contact'],
    }
    const [state, setState] = useState(defaultState)

    useEffect( () => {
        if (state.posts.length === 0) {
            getAllActivePosts()
        }
    })
    useEffect( () => {
        if (state.galleries.length === 0) {
            getAllGalleries()
        }
    })
    const getAllActivePosts = () => {
        getPosts().then(result => {
            setState(previousState => {
                return {
                    ...previousState,
                    posts: result.length > 0 ? result : []
                }
            })
        })
    }

    const getAllGalleries = () => {
        getGalleries().then(result => {
            setState(previousState => {
                return {
                    ...previousState,
                    galleries: result.length > 0 ? result : []
                }
            })
        })
    }

    const handleTabSelect = (index) => {
        setState(previousState => {
            return {
                ...previousState,
                tabIndex: index,
            }
        })
    }
    const getActiveTab = (tabIndex, posts, galleries) => {
        switch(tabIndex) {
            case 0: {
                return <DisasterPosts posts={ posts } />
            }
            case 1: {
                return <Galleries galleries={ galleries } />
            }
            case 2: {
                return <About />
            }
            case 3: {
                return <Contact />
            }
            default: {

            }
        }
    }

    const { posts, galleries, tabs, tabIndex } = state
    const inAppNavigation = tabs.map( (tab, index) => {
        const active = index === tabIndex ? 'active': ''
        return (
            <span key={`tab-nav-${index}`} onClick={ e => handleTabSelect(index) } className={`tabItem ${active}`}>{ tab }</span>
        )
    })
    const tabNavContainer = (
        <div className='tabNavContainer'>
            { inAppNavigation }
        </div>
    )
    let activeTab = getActiveTab(tabIndex, posts, galleries)
    
    return (
        <div className='MainContainer'>
            { tabNavContainer }
            { activeTab }
        </div>
    )
    
}

export default MainContainer
