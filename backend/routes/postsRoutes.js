import { Router } from 'express'
import multer from'multer'
import multerS3 from'multer-s3'
import aws from 'aws-sdk'
import { db } from '../lib/db'
import { posts_db_name } from '../Utilities/API_utilities'


const postsRouter = Router()
const s3 = new aws.S3()
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'josephartimages',
        key: function (req, file, cb) {
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});

postsRouter.get('/api/posts', (req, res) => {
    db.getAll(posts_db_name).then(result => {
        return res.json(result)
    }).catch(error => {
        console.log('error getting all Posts', error)
        return res.status(500).json(error)
    })
})

// postsRouter.post('/api/posts', function(req, res) {
//     const fileName = req.body.title
//     const fileType = 'png'
//     const S3_BUCKET = 'josephartimages'
//     const s3Params = {
//         Bucket: S3_BUCKET,
//         Key: fileName,
//         Expires: 60,
//         ContentType: fileType,
//         ACL: 'public-read'
//     };
//     s3.getSignedUrl('putObject', s3Params, (err, data) => {
//         if(err){
//             console.log(err);
//             return res.end();
//         }
//         const returnData = {
//             signedRequest: data,
//             url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
//         };
//         res.write(JSON.stringify(returnData));
//         res.end();
//     });
// })

export {
    postsRouter
}