const router = require('express').Router();
const db = require('../models');

router.get('/', async (req, res) => {
    try {
        let books = await db.Book.find();
        res.status(200).json(books);
    } catch (e) {res.status(404).json({error: 404});console.log(e)}
});
router.post('/', async (req, res) => {
    try {
        let book = await db.Book.create(req.body);
        res.status(200).json(book);
    } catch(e) {res.status(404).json({error: 404});console.log(e)}
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let book = await db.Book.findById(id);
        res.status(200).json(book);
    } catch(e) {res.status(404).json({error: 404});console.log(e)}
});
router.patch('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let book = await db.Book.findByIdAndUpdate(id, req.body);
        res.status(200).json(book);
    } catch(e) {res.status(404).json({error: 404});console.log(e)}
});
router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let book = await db.Book.findByIdAndDelete(id);
        res.status(200).json(book);
    } catch(e) {res.status(404).json({error: 404});console.log(e)}
});

module.exports = router;