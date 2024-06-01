import { MongoClient } from "mongodb";

async function getDatabase(){
    const client = await MongoClient.connect(
        'mongodb://localhost:27017/blog'
        );
    return { client: client, db: client.db() };
}
export default getDatabase;