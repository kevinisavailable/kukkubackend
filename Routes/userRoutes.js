const router = require('express').Router()
const { getUser, updateUser, createUser, getAllUser } = require('../Database/User');


router.get('/' , async(req , res)=>{
    try {
        var users = await getAllUser();
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

router.post('/' , async(req , res)=>{
    var userDetails = req.body.userDetails;
    try {
        var user = await createUser(userDetails);
        res.send(user);
    } catch (error) {
        res.send(error)
    }
})
 
// Route to get a specific user by id
router.get('/:email', async(req, res) => {
    var email = req.params.email;
    try {
        var user = await getUser(email)
        if(user){
            res.send(user);
        }else {
            res.send({})
        }
      } catch (e) {
        res.status(500).send('Error connecting to the database');
    }
});

router.put('/:email' , async(req ,res) => {
    var email = req.params.email;
    var userDetails = req.body.userDetails;

    try {
        var updatedUser = await updateUser(email, userDetails)
        res.send(updatedUser);
    } catch (error) {
        res.send(error);
    }
})
module.exports = router;