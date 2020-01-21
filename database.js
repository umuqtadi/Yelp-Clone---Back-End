let sqlite3 = require('sqlite3')
let database = new sqlite3.Database('./database.db')

// Tables I will need

// Restaurants Table
// name, address, foodType, lon, lat, image, restaurantId ( one to many relationship with comments )

// Categories Table
// image, type, description

// Comments Table
// comment, restaurantId (this is how we will relate a comment to a restaurant)

const createTableRestaurantsQuery = `CREATE TABLE IF NOT EXISTS restaurants (name TEXT, address TEXT, foodType TEXT, lon INTEGER, lat INTEGER, image TEXT, restaurantId)`

const createTableCategoriesQuery = `CREATE TABLE IF NOT EXISTS categories (image TEXT, type TEXT, description TEXT)`

const createTableCommentsQuery = `CREATE TABLE IF NOT EXISTS comments (comment TEXT, restaurantId INTEGER)`

database.run(createTableRestaurantsQuery, error => {
    if(error) {
        console.log(`Create restaurants table failed`)
    } else {
        console.log(`Create restaurants table succeeded`)
    }
})

database.run(createTableCategoriesQuery, error => {
    if(error) {
        console.log(`Create categories table failed`)
    } else {
        console.log(`Create categories table succeeded`)
    }
})

database.run(createTableCommentsQuery, error => {
    if(error) {
        console.log(`Create comments table failed`)
    } else {
        console.log(`Create comments table succeeded`)
    }
})

module.exports = database;