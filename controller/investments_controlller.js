const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const Investment = require("../models/inve")

const investmentController = require(".");

//Create CRUD routes

//GET one investment
exports.getInvestment = (req, res, next) => {
    const InvestmentId = req.params._id
  db.findById(InvestmentId)
    .then(investment => {
        res.satus(200).json("investment", { investment: investment });
    })
};

//GET all investments
exports.getInvestments = (req,res,next)=>{
    db.find()
        .then(investments => {
            res.satus(200).json("investments", {investments: investments})
        })
}

//POST one investment
exports.addInvestment = (req, res, next) => {
  const InvestmentId = req.body["InvestmentId"];
  const Region = req.body["Region"];
  const Office = req.body["Office"];
  const Registration_Received = req.body["Registration Received"];
  const Investment_Name = req.body["Investment Name"];
  const Deal_Status = req.body["Deal Status"];
  const City = req.body["City"];
  const State = req.body.State["Province"];
  const Deal_Source = req.body["Deal Source"];
  const Acquisition_Officer = req.body["Acquisition Officer"];

  const newInvestment = new InvestmentId(
    //FILL IN MODEL REQUIREMENTS 
  )

  //Check to see if record exists
  db.getOne();
  //If so, return with 'already exists message
  //If not, create record, insert into db and return confirmation to user
  newInvestment.save()
    .then(data => {
        res.status(201).json({
            message: "investment added successfully"
        })
    });
};

//UPDATE
exports.updateInvestment = (req,res,next)=>{
    const dat = req.body  //destrucure and pull out updated data here
    //find the investment by id
    db.findById(req.params.id)
        .then(investment => {
            res.satus(200).json("invsupdatetments", {
                investment: investment
            })
        })
}

//DELETE
exports.deleteInvestment = (req,res,next)=>{
    db.findByIdandRemove(req.parmas.id)
        .then(investment => {
            res.satus(200).json("delete", {message: "Investment successfully deleted"})
        })
}

