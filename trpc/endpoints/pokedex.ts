import express from 'express';

const ROUTER = express.Router();

ROUTER.get('/');
ROUTER.get('/:id');

export default ROUTER;
