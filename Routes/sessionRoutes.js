const { saveSessionToDatabase } = require('../Database/Session');

const router = require('express').Router()

router.post('/' , async(req , res)=>{
    var sessionDetails = req.body;
    console.log(sessionDetails)
    try {
        const response = await saveSessionToDatabase(sessionDetails);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
})

router.get('/' , async(req , res)=>{
    var websiteId = req.query.websiteId;
    var websiteUrl = req.query.websiteUrl;

})

module.exports = router;