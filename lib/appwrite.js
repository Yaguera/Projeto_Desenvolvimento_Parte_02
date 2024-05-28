import { Client, Account, ID } from "appwrite";

export const config = {
    endpoint: 'http://cloud.appwrite.io/v1',
    projectId: '66507c59002178907894',
    databaseId: '66507f45003202df2365',
    userCollectionId: '665487e50034fe82eb9f',
    supermarketCollectionId: 'supermarkets',
    ongCollectionId: '6654db8a00100d13f6e1'
}

// Init your Web SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID

const account = new Account(client);

export const createUser = () =>{
    // Register User
    account.create(ID.unique(), "email@example.com", "password", "Walter O'Brien")
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    
}

