import { Router } from 'express'
import  { GallerySchema } from '../graphql/GallerySchema'
import { graphql } from 'graphql'


const galleriesRouter = Router()


galleriesRouter.get('/api/galleries', (req, res) => {
    const query = `query { galleries { name, _id, address, city, state, zipcode, url, imgURL }}`
    graphql(GallerySchema, query).then(result => {
        res.json(result.data.galleries)
    })
})

export {
    galleriesRouter
}