const express = require('express');
const router = express.Router();
const Item = require('./items-model');
const {restricted} = require('../middleware')

router.get('/', (req, res, next) => {
    Item.find().then(items => {
        res.json(items)
    }).catch(next)
})

router.post('/', restricted, (req, res, next) => {
    Item.insert(req.body).then(item => {
        res.json(item)
    }).catch(next)
})