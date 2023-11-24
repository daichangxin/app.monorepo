export const config = {
    ENV: process.env.ENV,
    isDev: window.location.port === '8080',

    appwriteEndpoint: process.env.APPWRITE_ENDPOINT || '',
    appwriteProject: process.env.APPWRITE_PROJECT_ID || '',
};
