import { MongoClient } from "mongodb";
import Dotenv from "dotenv"
Dotenv.config()
const url = `mongodb+srv://${process.env.DB_Username}:${process.env.DB_Password}@socialcluster.h2bwa.mongodb.net/?retryWrites=true&w=majority&appName=SocialCluster`
console.log(url)
const client = new MongoClient(url)

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if connection fails
    }
}

export  {
    connectToDatabase,
    client
};