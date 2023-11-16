let sessionCollection;

function setSessionCollection(client) {
    const db = client.db('KukkuDB');
    sessionCollection = db.collection('SessionCollection');
}


async function saveSessionToDatabase(sessionDetails){
    try {
        const session = await sessionCollection.insertOne(sessionDetails)
        return session;
    } catch (error) {
        return error;
    }
}

module.exports = {setSessionCollection , saveSessionToDatabase}