const router = require('express').Router();
const { Post, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: ['id', 'title', 'body', 'created_at'],
      include: [
          {
            model: User,
            attributes: ['username']
          }
        ]
    })
    .then(data => res.json(data))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  
  });

  router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        user_id: req.body.user_id,
        body: req.body.body,


        
      })
        .then(data => res.json(data))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

  module.exports = router;