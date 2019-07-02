import React, { useState, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainContainer from '../../containers/MainContainer/MainContainer'
import PostContext from '../../context/PostContext'

require('./Navigation.css');

function NavigationComponent (props) {
    const [ post, setPost ] = useState({post: ''})
    const postContext = useContext(PostContext)

    postContext.Provider = {
        post: post,
        updateSelectedPost: (post) => {
            setPost({post})
        }
    }

    return (
        <div>
            <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={MainContainer}/>
                    <Route path='/login' component={MainContainer}/>
                    <Route path='/admin:id' component={MainContainer}/>
                </Switch>

            </div>
            </BrowserRouter>

        </div>
    );

}

export default NavigationComponent
