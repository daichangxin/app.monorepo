export const config = {
    ENV: import.meta.env.VITE_ENV,
    isDev: window.location.port.length > 2,
};
