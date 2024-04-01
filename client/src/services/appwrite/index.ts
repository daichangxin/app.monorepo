import { Account, Client } from 'appwrite';
import { config } from '../../config';

const client = new Client();
client.setEndpoint(config.appwriteEndpoint).setProject(config.appwriteProject);

const account = new Account(client);

export const aw = {
    account,
};
