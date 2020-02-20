const db = require('./database.js')

let restaurants = [
    {
        name: "Umar's Pizza",
        address: '420 Light St ',
        foodType: 'Pizza',
        lon: -122.462540,
        lat: 38.782791,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        restaurantId: 1
    },
    {
        name: "Darkwing Duck",
        address: '309 Clement St, San Francisco, CA 94118',
        foodType: 'Duck Duck Goose',
        lon: -122.462540,
        lat: 37.782791,
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        restaurantId: 2
    },
    {
        name: "Three Bromsticks",
        address: '1970 Hogsmeade',
        foodType: 'Pumpkin Juice and Wizard Food',
        lon: -122.471161,
        lat: 37.780499,
        image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        restaurantId: 3
    },{
        name: "Probably Kind of Good",
        address: '555 Bush St, San Francisco, CA 94104',
        foodType: 'Pasta',
        lon: -122.406360,
        lat: 37.790480,
        image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        restaurantId: 4
    },
    {
        name: "Burma Superstar",
        address: '31345 Park St, Alameda, CA 94501',
        foodType: 'Burmese',
        lon: -122.243440,
        lat: 37.763700,
        image: 'https://images.unsplash.com/photo-1460601416989-a913740bdde9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        restaurantId: 5
    },
    {
        name: "Lous Sandwich Shop",
        address: '5017 Geary Blvd, San Francisco, CA 94118',
        foodType: 'Subs',
        lon: -122.471161,
        lat: 37.780499,
        image: 'https://images.unsplash.com/photo-1483168729556-71adc94bef6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        restaurantId: 6
    },{
        name: "Marafuku Ramen",
        address: '1581 Webster St #235, San Francisco, CA 94115',
        foodType: 'Ramen',
        lon: -122.431458,
        lat: 37.785370,
        image: 'https://images.unsplash.com/photo-1558220831-9ad8f955fb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        restaurantId: 7
    }
]

let categories = [
    {
        image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3034&q=80",
        type: 'Pizza',
        description: 'Pizza and where my wings at'
    },
    {
        image: 'https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        type: 'Burgers',
        description: 'Burger and some fries'
    },
    {
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        type: 'Pakistani',
        description: 'Damn. That shit good as hell'
    },
    {
        image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        type: 'Mediterranean',
        description: 'Hummus and yalla with it'
    },
    {
        image: "https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
        type: 'Mexican',
        description: 'Tacos? Burritos?'
    },
    {
        image: 'https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        type: 'Chinese',
        description: 'Tryna get lo mein?'
    },
    {
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        type: 'Sushi',
        description: 'Spicy Tuna FTW'
    },
    {
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        type: 'Americana',
        description: `If you don't eat steak just leave my country`
    },
]

let comments = [
    {
        comment: 'I would take your mom here on a date',
        restaurantId: 1
    },
    {
        comment: 'You hungry for more?',
        restaurantId: 3
    },
    {
        comment: 'Where did you think we were going?',
        restaurantId: 4
    },
    {
        comment: 'I heard Jesus ate here',
        restaurantId: 1
    },
    {
        comment: 'To eat or not to eat, that is the question',
        restaurantId: 2
    },
    {
        comment: 'Put the lime in the coconut and mix it all up',
        restaurantId: 3
    },
]

db.serialize(()=> {

    // Drop the 'athlete' table
    const dropRestTableQuery = 'DROP TABLE IF EXISTS restaurants';
    db.run(dropRestTableQuery, error=> { 
      if(error) console.error("Error dropping 'restaurants' table");
      else console.log("Dropped 'restaurants' table");
    })
  
    // (Re)create the 'athlete' table
    const createRestTableQuery = 'CREATE TABLE restaurants (name TEXT, address TEXT, foodType TEXT, lon INTEGER, lat INTEGER, image TEXT, restaurantId INTEGER)';
    db.run(createRestTableQuery, error=> {
      if(error) console.error("Error creating 'restaurants' table");
      else console.log("Created 'restaurants' table");
    })
  
    // Insert each athlete
    const insertRestQuery = 'INSERT INTO restaurants VALUES (?, ?, ?, ?, ?, ?, ?)';
    for(let restaurant of restaurants) {
      let restData = [restaurant.name, restaurant.address, restaurant.foodType, restaurant.lon, restaurant.lat, restaurant.image, restaurant.restaurantId];
      db.run(insertRestQuery, restData, error=> {
        if(error) console.log("Could not insert restaurant", restaurant, error);
        else console.log(`Inserted ${restaurant.name} into 'restaurant'`);
      })
    }


    const dropCatTableQuery = 'DROP TABLE IF EXISTS categories';
    db.run(dropCatTableQuery, error=> { 
      if(error) console.error("Error dropping 'categories' table");
      else console.log("Dropped 'categories' table");
    })
  
    const createCatTableQuery = 'CREATE TABLE categories (image TEXT, type TEXT, description TEXT)';
    db.run(createCatTableQuery, error=> {
      if(error) console.error("Error creating 'categories' table");
      else console.log("Created 'categories' table");
    })
  
    const insertCatQuery = 'INSERT INTO categories VALUES (?, ?, ?)';
    for(let category of categories) {
      let catData = [category.image, category.type, category.description];
      db.run(insertCatQuery, catData, error=> {
        if(error) console.log("Could not insert category", category, error);
        else console.log(`Inserted ${category.type} into 'category'`);
      })
    }


    const dropCommentsTableQuery = 'DROP TABLE IF EXISTS comments';
    db.run(dropCommentsTableQuery, error=> { 
      if(error) console.error("Error dropping 'comments' table");
      else console.log("Dropped 'comments' table");
    })
  
    const createCommentsTableQuery = 'CREATE TABLE comments (comment TEXT, restaurantId INTEGER)';
    db.run(createCommentsTableQuery, error=> {
      if(error) console.error("Error creating 'comments' table");
      else console.log("Created 'comments' table");
    })
  
    const insertCommentQuery = 'INSERT INTO comments VALUES (?, ?)';
    for(let comment of comments) {
      let commentData = [comment.comment, comment.restaurantId];
      db.run(insertCommentQuery, commentData, error=> {
        if(error) console.log("Could not insert category", comment, error);
        else console.log(`Inserted comment into 'comments'`);
      })
    }
})