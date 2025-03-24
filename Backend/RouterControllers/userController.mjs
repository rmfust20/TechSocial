import {connectToDatabase, client} from "../db.mjs"
let collection;
async function main(){
    await connectToDatabase();
    const db = client.db("SLUSOCIAL");
    collection = db.collection("Users");
}
export async function checkUser(User){
    //make sure the user does not already exist
    console.log(User.email)
    let item = await collection.findOne({
        "email" : User.email
    })
    
    return (item == null)
    //if item is null the user does not exist
}
export async function addUser(User){
    const result = await collection.insertOne(User);
    console.log(result);
    return result;
}
main();
    

    
