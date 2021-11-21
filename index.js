const express = require('express');
const { Sequelize } = require('sequelize');
const fs = require('fs');
const db = require('./models');
const { Post } = require('./models');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/addpost', (req, res) => {
    Post
        .create({
            title: 'sample post title',
            content: 'sample post content',
            author: 'tester'
        })
        .then(() => {
            res.send('New post added');
        })
        .catch(err => {
            if (err) console.log(err);
        })
});


app.get('/allposts', (req, res) => {
    Post
        .findAll()
        .then(posts => {
            res.send(posts);
        })
        .catch(err => {
            if (err) console.log(err);
        })
});

app.get('/post/:author', (req, res) => {
    Post
        .findAll({ where: { author: req.params.author }})
        .then(post => {
            res.send(post);
        })
        .catch(err => {
            if (err) console.log(err);
        })
});

app.delete('/post/:author', (req, res) => {
    Post
        .destroy({ where: { author: req.params.author }})
        .then(() => {
            res.send(`Remove all posts by user ${req.params.author}`);
        })
        .catch(err => {
            if (err) console.log(err);
        })
});

db.sequelize.sync().then(() => {
    console.log('Established db connection');
    app.listen(3000, () => {
        console.log(`Server started on PORT 3000`);
    });
})