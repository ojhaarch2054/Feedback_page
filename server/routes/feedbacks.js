const express = require('express') //imports the Express.js framework
const { query } = require('../helpers/db.js') //imports the query from db.js which is in helpers folder

const fbRouter = express.Router() //handle routing for the feedback-related endpoints

fbRouter.post("/feedback",async(req,res) => { //route handler for POST requests to the "/feedback" endpoint
        try {
          const sql = "insert into feedback (Full_Name, Email, feedback_text, Satisfaction_rating ) values ($1,$2,$3,$4) returning id"
          const result = await query(sql,[req.body.Full_Name,req.body.Email,req.body.feedback_text, req.body.Satisfaction_rating])
          res.status(200).json({id: result.rows[0].id}) 
        } catch (error) {
          res.statusMessage = error
          res.status(500).json({error: error})
        }
    })

module.exports = {
  fbRouter
}