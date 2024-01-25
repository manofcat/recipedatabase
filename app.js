const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// = []
let recipes = require('./recipeDatabase.json');

// = []
let users = require('./users.json');

// GET Methods
// users = [ {username : "", password : "", "favourites" : [], "own_recipes" : []} ]
app.get('/users/all', function (req, resp) {
    resp.send(users);
});

app.get('/users/check', function (req, resp, next) {
    potentialUsername = req.query.username;
    potentialPassword = req.query.password;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].username == potentialUsername && users[i].password == potentialPassword) {
            resp.send(['Welcome ' + potentialUsername, true]);
            return next();
        } else {
            continue;
        }
    }
    resp.send(['Either your username or password was wrong.', false]);
});

// gives attributes of a single user
app.get('/users/attributes', function (req, resp) {
    nameOfUser = req.query.username;
    result = [];
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].username.toLowerCase() == nameOfUser.toLowerCase()) {
            result.push(users[i]);
        }
    };
    resp.send(result);
});

app.get('/users/ownedrecipes', function (req, resp) {
    userName = req.query.username;
    result = [];
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].username.toLowerCase() == userName.toLowerCase()) {
            for (let j = 0; j < users.length; j += 1) {
                result.push(users[i].own_recipes[j]);
            }
        }
    };
    resp.send(result);
});
// app.get('/users/favourites', function (req, resp) {
// });

app.get('/recipe/all', function (req, resp) {
    resp.send(recipes);
});

app.get('/recipe/attributes', function (req, resp) {
    recipeName = req.query.name;
    if (recipeName.includes('+')) {
        recipeName = recipeName.replace(/\+/g, ' ');
    }
    result = [];
    for (let i = 0; i < recipes.length; i += 1) {
        if (recipes[i].name.toLowerCase() == recipeName.toLowerCase()) {
            result.push(recipes[i]);
        }
    }
    resp.send(result);
});

app.get('/recipe/search', function (req, resp) {
    result = [];
    attr = req.query.attr;
    if (attr.includes('+')) {
        attr = attr.replace(/\+/g, ' ');
    }
    val = req.query.val;
    range = req.query.range;
    if (attr == 'name') {
        for (let i = 0; i < recipes.length; i += 1) {
            if (recipes[i].name.toLowerCase().includes(val.toLowerCase())) {
                result.push(recipes[i]);
            } else {
                continue;
            }
        }
    } else if (attr == 'ingredient') {
        for (let i = 0; i < recipes.length; i += 1) {
            if (Object.keys(recipes[i].ingredients).includes(val.toLowerCase())) {
                result.push(recipes[i]);
            } else {
                continue;
            }
        }
    } else {
        val = parseInt(req.query.val);
        if (range == 'min') {
            for (let i = 0; i < recipes.length; i += 1) {
                if (recipes[i][attr] >= val) {
                    result.push(recipes[i]);
                }
            }
        } else {
            for (let i = 0; i < recipes.length; i += 1) {
                if (recipes[i][attr] <= val) {
                    result.push(recipes[i]);
                }
            }
        }
    }
    resp.send(result);
});

// POST Methods

app.post('/recipe/new', function (req, resp) {
    const recipe = req.body;
    resp.send(recipe);
    recipes.push(recipe);
    recipes = JSON.stringify(recipes);
    fs.writeFileSync('./recipeDatabase.json', recipes);
});

app.post('/users/new', function (req, resp) {
    const user = req.body;
    resp.send(user);
    users.push(user);
    users = JSON.stringify(users);
    fs.writeFileSync('./users.json', users);
});

// {to : "username", recipe : {...}}
// not implemented sorry
app.post('/users/new/favourite', function (req, resp) {
    const data = req.body;
    resp.send(data);
    toUser = data.to;
    newUserFavourite = data.recipe;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].username == toUser) {
            users[i].favourites.push(newUserFavourite);
        } else {
            continue;
        }
    }
    users = JSON.stringify(users);
    fs.writeFileSync('./users.json', users);
});

// {created_by : "", name : "", image : "", ingredients : [{ingredient : ""}], instructions : [], ................etc}
app.post('/users/new/createdby', function (req, resp) {
    const recipeData = req.body;
    resp.send(recipeData);
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].username == recipeData.created_by) {
            users[i].own_recipes.push(recipeData);
        } else {
            continue;
        }
    }
    users = JSON.stringify(users);
    fs.writeFileSync('./users.json', users);
});

module.exports = app;
