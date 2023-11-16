const { createNewWebsite, getAllWebsitesOfUser } = require('../Database/Websites');

const router = require('express').Router()


router.post('/' , async(req , res)=>{
    var websiteDetails = req.body.websiteDetails;
    try {
        var website = await createNewWebsite(websiteDetails);
        res.send(website);
    } catch (error) {
        res.send(error)
    }
})

router.get('/' , async(req , res)=>{
    var emailId = req.query.emailId;
    try {
        var response = await getAllWebsitesOfUser(emailId);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;