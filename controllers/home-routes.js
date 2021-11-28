const router = require('express').Router();


router.get('/', (req, res) => {

    res.render('homepage', {
    
    //   loggedIn: true
    });
})

module.exports= router;