const express = require('express')
const database = require('./database.js')

const app = express()

const PORT = 8000;

//Middleware
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('You hungry fam? API')
})

// Restaurants routes

app.get('/api/restaurants', (req, res) => {
    const getAllRestQuery = `SELECT * FROM restaurants`

    database.all( getAllRestQuery, (error, results) => {
        if(error) {
            console.log('Could not get all restaurants')
            res.sendStatus(500)
        } else {
            console.log('Getting all restaurants was successful')
            res.status(200).json(results)
        }
    })
})

app.post('/restaurants', (req, res) => {
    const addRestQuery = `INSERT INTO restaurants (name, address, foodType, lon, lat, image, restaurantId) VALUES (?,?,?,?,?,?,?)`

    database.run(addRestQuery, [req.body.name, req.body.address, req.body.foodType, req.body.lon, req.body.lat, req.body.image, req.body.restaurantId ], (error) => {
        if(error) {
            console.log('Add restaurant failed')
            res.sendStatus(500)
        } else {
            console.log('Adding restaurant successful')
            res.sendStatus(200)
        }
    })
})


// Category routes

app.get('/api/categories', (req, res) => {
    const getAllCatQuery = `SELECT * FROM categories`
    
    database.all(getAllCatQuery, (error, results) => {
        if(error) {
            console.log(`Getting categories failed`)
            res.sendStatus(500)
        } else {
            console.log('Getting categories successful')
            res.status(200).json(results)
        }
    })
})

app.post('/categories', (req, res) => {
    const addCatQuery = `INSERT INTO categories (image, type, description) VALUES (?,?,?)`

    database.run(addCatQuery, [req.body.image, req.body.type, req.body.description], (error) => {
        if(error) {
            console.log(`Adding category failed`)
            res.sendStatus(500)
        } else {
            console.log(`Adding category successful`)
            res.sendStatus(200)
        }
    })
})

// Comment Routes

app.get('/api/comments/:id', (req, res)=> {
    const restaurantId = req.params.id;
    const getAllRestComments = `SELECT * FROM comments WHERE restaurantId = ${restaurantId}`

    database.all(getAllRestComments, (error, results) => {
        if(error) {
            console.log(`Could not get all of restaurants comments`)
            res.sendStatus(500)
        } else {
            console.log(`Get restaurants comments successful`)
            res.status(200).json(results)
        }
    })
})

app.post('/api/comments/:id', (req, res) => {
    const restaurantId = req.params.id;
    const addRestComment = `INSERT INTO comments (comment, restaurantId) VALUES (?,${restaurantId})`

    database.run(addRestComment, [req.body.comment], (error) => {
        if(error) {
            console.log(`Adding comment to restaurant failed`)
            res.sendStatus(500)
        } else {
            console.log(`Adding comment was successul`)
            res.sendStatus(200)
        }
    })
})

// app.delete('/api/comments/:id', (req, res)=> {
//     const commentId = req.params.id
//     const deleteCommentQuery = `DELETE FROM comments WHERE comment.oid = ${commentId}`

//     database.run(deleteCommentQuery, (error) => {
//         if(error) {
//             console.log(`Could not delete comment. You're obvjously doing it wrong`)
//             res.sendStatus(500)
//         } else {
//             console.log('Deletion of this comment was successful')
//             res.sendStatus(200)
//         }
//     })
// })


app.listen(PORT, ()=> {
    console.log(`We out here on ${PORT}`)
})