import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'

import PostContext from '../../context/PostContext'
import { createPost, editPost, getPosts, getUser } from '../../api/api'
import DisasterPosts from '../../compositions/DisasterPosts/DisasterPosts'
import { getAddressMarkup } from '../../components/AddressMarkup/AddressMarkup'
import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'
import { validateEmail } from '../../Utilities/validationUtilities'

require('./AdminContainer.css')

function AdminContainer(props) {
    const postContext = useContext(PostContext)
    const state = {
        user: {},
        postDetails: {
            description: '',
            artTitle: '',
            price: 0.0,
            available: true,

        },
        selectedID: '',
        tabIndex: 0,
        tabs: ['Create Post', 'Update Existing Post'],
    }

    const [adminState, setAdminState] = useState(state)
    
    useEffect(() => {
        if (!adminState.user._id && !adminState.error) {
            const userID = props.match.params.id.split(':')[1]
            getUser(userID)
            .then(response => {
                return response.user
            })
            .then(user => {
                getPosts()
                .then(result => {
                    setAdminState(previousState => {
                        return {
                            ...previousState,
                            user: user,
                            posts: result.length > 0 ? result : []
                        }
                    })
                })
            })
            .catch(error => {
                console.log('Error :: ', error)
                setAdminState({
                    ...adminState,
                    error: error
                });
            });
        }
    })

    const postForEdit = postContext.Provider.post.post
    const isEditMode = postForEdit._id ? true : false
    if (adminState.tabIndex !== 0 && postForEdit._id) {
        setAdminState({
            ...adminState,
            postDetails: {
                ...adminState.postDetails,
                ...postForEdit
            },
            tabIndex: 0,
        })
    }
    

    const handleInputChange = (event) => {
        event.preventDefault()
        const val = event.target.value;
        const name = event.target.name;
        setAdminState({
            ...adminState,
            postDetails: {
                ...adminState.postDetails,
                [name]: val,
            },
        });
    }


    const handleSelect = (event, post) => {
        event.preventDefault()
        postContext.Provider.updateSelectedPost(post)
    }

    const validatePostDetails = () => {
        return Object.keys(adminState.postDetails).reduce( (accumulator, postField) => {
            if (postField === 'title' && (0 > adminState.postDetails[postField] || adminState.postDetails[postField].length > 0) ) {
                return {
                    ...accumulator,
                    [postField]: `Invalid ${postField}, please re-enter ${postField}`,
                }
            } else if (adminState.postDetails[postField].length === 0) {
                return {
                    ...accumulator,
                    [postField]: `Invalid ${postField}, please re-enter valid ${postField}`,
                }
            } else if (postField === 'price' && adminState.postDetails[postField] > 0.00) {
                return {
                    ...accumulator,
                    [postField]: `Invalid ${postField}, please re-enter valid ${postField}`,
                }
            } else {
                return accumulator
            }
        }, {})
    }
    const handleNewSubmit = (event) => {
        event.preventDefault();

        const req = {
            title: adminState.postDetails.title,
            description: adminState.postDetails.description,
            price: adminState.postDetails.price,
            available: adminState.postDetails.available,
        }
        const errors = validatePostDetails(req)

        if (Object.keys(errors).length === 0) {
            createPost(req).catch( (error) => {
                console.log('Error creating post', error);
            })
        } else {
            setAdminState({
                ...adminState,
                errors: errors,
            })
        }
        
    }

    const handleUpdateSubmit = (event) => {
        event.preventDefault();

        // TODO : Figure out update API

        const req = {
            _id: adminState.postDetails._id,
            title: adminState.postDetails.title,
            description: adminState.postDetails.description,
            price: adminState.postDetails.price,
            available: adminState.postDetails.available,
        }

        editPost(req).catch( (error) => {
            console.log('Error creating post', error);
        });
    }
    
    const manageEmergency = (postDetails = {}) => {
        const addressMarkup = getAddressMarkup(postDetails, handleInputChange, true)
        const contactMarkup = contactDetailsMarkup(postDetails, handleInputChange, true)
        const infoMarkup = postInformationDetails(postDetails, handleInputChange, true)
        const handler = isEditMode ? handleUpdateSubmit : handleNewSubmit
        const buttonLabel = isEditMode ? 'Edit' : 'Create'
        return (
            <div className='create-post-container'>
                { infoMarkup }
                { addressMarkup }
                { contactMarkup }
                <hr />
                <button className='submit-post' onClick={handler}>{ buttonLabel }</button>
            </div>
        );
    }

    const showEmergencies = (posts) => {
        return <DisasterPosts handleSelectPost={handleSelect} posts={ posts } />
    }


    const handleTabSelect = (index) => {
        if (index === 0) {
            postContext.Provider.updateSelectedPost({post: {}})
        }
        setAdminState(previousState => {
            return {
                ...previousState,
                tabIndex: index,
            }
        })
    }

    const getActiveTab = (tabIndex, posts) => {
        switch(tabIndex) {
            case 0: {
                return manageEmergency(adminState.postDetails)
            }
            case 1: {
                return showEmergencies(posts)
            }
            default: {
                return manageEmergency()
            }
        }
    }

    if (adminState.user) {
        // Render page if user is logged in, and is an admin
        const { posts, tabs, tabIndex } = adminState
        const adminNavigation = tabs.map( (tab, index) => {
            const active = index === tabIndex ? 'active': ''
            return (
                <span key={`tab-nav-${index}`} onClick={ e => handleTabSelect(index) } className={`tab-item ${active}`}>{ tab }</span>
            )
        })
        const tabNavContainer = (
            <div className='admin-tabs'>
                { adminNavigation }
            </div>
        )
        const activeTab = getActiveTab(tabIndex, posts)
        
        return (
            <div className='AdminContainer'>
                { tabNavContainer }
                { activeTab }
            </div>
        );
    } else {
        // Show error message if user is not an admin
        return (
            <div>
                <p> 403 Error : Restricted Access </p>
            </div>
        );
    }

}

export default AdminContainer
