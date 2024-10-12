import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
  .setEndpoint(process.env.API_ENPOINT!)
  .setProject(process.env.API_PROJECT_ID!); // Replace with your project ID

export const account = new Account(client);
export const database = new Databases(client);
export { ID } from 'appwrite';
