/**
 * Created by Adrian on 5/25/2016.
 */
'use strict';

const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact');
const auth = require('../middlewares/authentication');
const response = require('../helpers/response');

router.post('/contacts', auth.ensured, contactCtrl.create, response.toJSON('contact', 201));
router.get('/contacts', auth.ensured, contactCtrl.getAll, response.toJSON('contacts'));
router.get('/contacts/:contactId', auth.ensured, contactCtrl.findById, response.toJSON('contact'));
router.put('/contacts/:contactId', auth.ensured, contactCtrl.findById, contactCtrl.update, response.toJSON('contact'));
router.delete('/contacts/:contactId', auth.ensured, contactCtrl.findById, contactCtrl.delete);

module.exports = router;