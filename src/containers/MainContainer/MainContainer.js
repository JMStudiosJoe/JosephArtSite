import React, { useState, useEffect } from 'react'

import Posts from '../../compositions/Posts/Posts'
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
    const [errorState, setErrorState] = useState({})
    const { posts, galleries, tabs, tabIndex } = state
    useEffect( () => {
        if (state.posts.length === 0) {
            getAllActivePosts()
        }
    }, [posts])
    useEffect( () => {
        if (state.galleries.length === 0) {
            getAllGalleries()
        }
    }, [galleries])
    const getAllActivePosts = () => {
        getPosts().then(result => {
            setErrorState({})
            setState(previousState => {
                return {
                    ...previousState,
                    posts: result.length > 0 ? result : []
                }
            })
            
        }).catch(error => {
            setErrorState({
                ...errorState,
                message: 'Error connecting please try again later.'
            })
        })
    }

    const getAllGalleries = () => {
        getGalleries().then(result => {
            setErrorState({})
            setState(previousState => {
                return {
                    ...previousState,
                    galleries: result.length > 0 ? result : []
                }
            })
        }).catch(error => {
            setErrorState({
                ...errorState,
                message: 'Error connecting please try again later.'
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
                return <Posts posts={ posts } />
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
    const errorComponent = (
        <div className="error-message">
            { errorState.message ? errorState.message : ''}
        </div>
    )
    const activeTab = errorState.message ? errorComponent : getActiveTab(tabIndex, posts, galleries)
    
    return (
        <div className='MainContainer'>
            { tabNavContainer }
            { activeTab }
        </div>
    )
    
}

export default MainContainer
