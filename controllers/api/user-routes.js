const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
   
  User.findAll({
    attributes: { exclude: ['password'] }
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
        User.findOne({
          where: {
            id: req.params.id
          }
        })
          .then(data => {
            if (!data) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
            }
            res.json(data);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

// POST /api/users
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
        .then(data => res.json(data))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});
router.post('/login', (req, res) => {

    User.findOne({
        where: {
          email: req.body.email
        }
      }).then(data => {
        if (!data) {
          res.status(400).json({ message: 'No user with that email address!' });
          return;
        }
    
        res.json({ user: data });
    
        // Verify user
    
      });  
  
  })
  

// PUT /api/users/1
router.put('/:id', (req, res) => {
    individualHooks: true,
    User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
        .then(data => {
          if (!data[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(data);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;