export const config = {
    ENV: process.env.ENV,
    isDev: window.location.port.length > 2,

    appwriteEndpoint: process.env.APPWRITE_ENDPOINT || '',
    appwriteProject: process.env.APPWRITE_PROJECT_ID || '',
};
