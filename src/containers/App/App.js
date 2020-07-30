import React, { Component } from 'react'
import Navigation from '../../compositions/Navigation/Navigation'

import './App.css' // https://makeawebsitehub.com/best-safe-web-fonts-html-css/

class App extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title' >Joseph Richardson, Artist</h1>
                </header>
                <Navigation />
            </div>
        )
    }
}

export default App
