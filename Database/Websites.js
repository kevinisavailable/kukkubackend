let websitesCollection;

function setWebsitesCollection(client) {
    const db = client.db('KukkuDB');
    websitesCollection = db.collection('WebsitesCollection');
}


async function createNewWebsite(websiteDetails){
    try {
        const response = await websitesCollection.insertOne({
            websiteName : websiteDetails.websiteName,
            websiteUrl : websiteDetails.websiteUrl,
            websiteId : websiteDetails.websiteId,
            emailId : websiteDetails.emailId
        });
        return response;
    } catch (error) {
        return error;
    }
}

async function getAllWebsitesOfUser(emailId){
    try {
        const cursor = websitesCollection.find({ emailId: emailId });
        const results = await cursor.toArray();
        return results;
    } catch (error) {
        return error;
    }
}


module.exports = {getAllWebsitesOfUser , createNewWebsite , setWebsitesCollection}