let usersCollection;

function setUsersCollection(client) {
    const db = client.db('KukkuDB');
    usersCollection = db.collection('UsersCollection');
}


async function createUser(userDetails){
    try {
        const createdUser = await usersCollection.insertOne(userDetails)
        return createdUser;
    } catch (error) {
        return error;
    }
}

async function getUser(email) {
    try {
        const user = await usersCollection.findOne({ email: email });
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
}

async function updateUser(email , userDetails){
    var query = {email : email};
    var update = {
        $set : userDetails
    };
    var options = {}
    try {
        const result = await usersCollection.updateOne(query , update , options)
        return result;
    } catch (error) {
        return error;
    }
}


async function getAllUser(){
    try {
        const users = usersCollection.find({});
        const documents = await users.toArray();
        return documents;
    } catch (error) {
        return error
    }
}

module.exports = { getUser, setUsersCollection , updateUser  ,createUser  , getAllUser};


