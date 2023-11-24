import { Client, Users } from "node-appwrite";
import { config } from "../config";

const client = new Client();
client
    .setEndpoint(config.appwriteEndpoint)
    .setProject(config.appwriteProjectId)
    .setKey(config.appwriteApiKey);

export const aw = {
    users: new Users(client),
};
