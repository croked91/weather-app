
 const getEnvVar = (key: string) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return process.env[key] || "";
};



export const DADATA_API_TOKEN = getEnvVar("REACT_APP_DADATA_API_TOKEN");
export const WEATHER_API_TOKEN = getEnvVar("REACT_APP_WEATHER_API_TOKEN");


