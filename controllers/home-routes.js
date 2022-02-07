const router = require('express').Router();
const { Post, User } = require('../models');


router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'body', 'created_at'],
        include: [
            {
              model: User,
              attributes: ['username']
            }
          ]
      })
      .then(data => {
        console.log(data)
        const posts = data.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts:posts,
            loggedIn: true
          });
      })


  
})

router.get('/login', (req, res) => {
    const fakeLoggedIn = true
    if (fakeLoggedIn){
        res.redirect('/')
        return;
    }
    res.render('login', {
    
    //   loggedIn: true
    });
})

router.get('/signup', (req, res) => {
    
    res.render('signup', {
    
    //   loggedIn: true
    });
})

module.exports= router;