import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://<kxiong@olin.edu>:<FrankWLin2023>@recipes.yzed4bm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect();

async function shoes() {
    try {
        const dataset = await client.db('World_Recipes').collection('European').find().toArray();
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
export { shoes }