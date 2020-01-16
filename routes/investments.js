var express = require('express');
var router = express.Router();

const investmentController = require('../controller/investments_controlller')



//GET one investment
router.get('/investment/:id', investmentController.getInvestment);

//GET all investments
router.get('investments', investmentController.getInvestments);

//POST one investment
router.post('/addInvestment', investmentController.addInvestment);

//UPDATE one investment 
router.post("investment/update/:id", investmentController.updateInvestment);

//DELETE one investment 
router.delete("investment/:id", investmentController.deleteInvestment);

module.exports = router;
