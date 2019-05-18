import React, { Component } from 'react'
import Navigation from '../../compositions/Navigation/Navigation'
import moment from 'moment'

import './App.css' // https://makeawebsitehub.com/best-safe-web-fonts-html-css/

class App extends Component {
    render() {
        const fonts = ['Apple Chancery', 'Brush Script MT', 'Luminari', 'Trattatello']
        const index = moment().utc().valueOf() % fonts.length - 1
        
        const titleStyle = {
            fontFamily: `${fonts[index]}, Lato, Tahoma, Sans-Serif`
        }
        return (
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title' style={ titleStyle }>Art of Joseph</h1>
                </header>
                <Navigation />
            </div>
        )
    }
}

export default App
