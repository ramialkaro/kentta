require('dotenv').config()
const express = require('express')

const router = express()


router.get('/map', (req, res) => {
    try {
        if(process.env.GOOGLE_API_KEY){
            res.status(200).json(process.env.GOOGLE_API_KEY)
        } else{
            res.status(404).json({msg: "Google api key not found "})
        }
    } catch (err) {
        res.status(500).json({msg: err})
    }
})

module.exports = router