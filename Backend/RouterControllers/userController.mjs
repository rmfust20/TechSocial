import {connectToDatabase, client} from "../db.mjs"
let collection;
async function main(){
    await connectToDatabase();
    const db = client.db("SLUSOCIAL");
    collection = db.collection("Users");
}
export async function checkUser(User){
    //make sure the user does not already exist
    let item = await collection.findOne({
        "email" : User.email
    })
    return (item == null)
    //if item is null the user does not exist
}
main();
    

    
