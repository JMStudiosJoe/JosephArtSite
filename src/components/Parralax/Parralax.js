import React, { useState } from 'react'
import './Parralax.css'
function Parralax(props) {
    const resetPathActivity = () => {
        for (let imageData of imageNameData) {
            imageData.active = false
        }
        this.getBackgroundPath()
    }
    const getBackgroundPath = () => {
        if (imageNameData != null && imageNameData.length != 0) {
            for (const imageData of imageNameData) {
                if (!imageData.active) {
                    imageData.active = true
                    return imageData.image
                }
            }
            this.resetPathActivity()
        }
    }

    const getParallaxCSS = () => {
        return  {};
    } 
    return (
        <div className='Parralax' style={this.getParallaxCSS()}>
        </div>
    )
}

export default Parralax