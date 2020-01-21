const express = require('express')

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

app.get('/retaurants', (req, res) => {
    const getAllRestQuery = `SELECT * FROM resaurants`

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
    const addRestQuery = `INSERT INTO restaurants (name, address, foodType, lon, lat, image, comments) VALUES (?,?,?,?,?,?,?)`

    database.run(addRestQuery, (error, results) => {
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

app.get('/categories', (req, res) => {
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

    database.run(addCatQuery, (error, results) => {
        if(error) {
            console.log(`Adding category failed`)
            res.sendStatus(500)
        } else {
            console.log(`Adding category successful`)
            res.sendStatus(200)
        }
    })
})


app.listen(PORT, ()=> {
    console.log(`We out here on ${PORT}`)
})