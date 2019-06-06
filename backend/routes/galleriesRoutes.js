import { Router } from 'express'
import { db } from '../lib/db'
import { posts_db_name } from '../Utilities/API_utilities'


const galleriesRouter = Router()


galleriesRouter.get('/api/galleries', (req, res) => {
    db.getAll('galleries').then(result => {
        return res.json(result)
    }).catch(error => {
        console.log('error getting all galleries', error)
        return res.status(500).json(error)
    })
})

export {
    galleriesRouter
}