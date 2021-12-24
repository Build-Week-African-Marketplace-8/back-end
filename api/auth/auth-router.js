const express = require("express");
const router = express.Router();
const {checkUsernameExists, validateUsername, validatePassword, checkPasswordCorrect, hashThePassword,} = require("../middleware");
const Users = require("../users/users-model");

//[POST]  /api/auth/register
router.post("/register",validateUsername, validatePassword, hashThePassword,(req, res, next) => {
    Users.addUser(req.body)
      .then((newUser) => {
        res.status(201).json(newUser);
      })
      .catch(next);
  }
);

//[POST]  /api/auth/login
router.post("/login", checkUsernameExists, checkPasswordCorrect, async (req, res, next) => {
    try {
      res.status(200).json({
        user_id: req.user_id,
        message: `Welcome back ${req.body.username}`,
        token: req.token,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.put('/update', checkUsernameExists, checkPasswordCorrect, async (req, res, next) => {
    try{
        const updatedUser = await Users.update(req.user_id, req.body)
        res.status(201).json(updatedUser)
    }catch (err){
        next(err)
    }
})

module.exports = router;