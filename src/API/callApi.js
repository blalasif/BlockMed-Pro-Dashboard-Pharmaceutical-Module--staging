import axios from "axios";

export const AuthAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_MICROSERVICE,
    headers: {
        "content-Type": "application/json; charset=utf-8",
    },
});

export const PharmaceuticalAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PHARMACEUTICAL_MICROSERVICE,
    headers: {
        "content-Type": "application/json; charset=utf-8",
    },
});

export const callAuthApi = async (url, method = "get", payload, params = {}) => {
    try {
        const response = await AuthAPI({
            url,
            method,
            data: payload,
            params,
        });
        return response;
    } catch (error) {
        console.log("🚀 ~ callAuthApi ~ error:", error)
        throw error;
    }
};

export const callPharmaceuticalApi = async (url, method = "get", payload, params = {}) => {
    try {
        const response = await PharmaceuticalAPI({
            url,
            method,
            data: payload,
            params,
        });
        return response;
    } catch (error) {
        console.log("🚀 ~ callPharmaceuticalApi ~ error:", error)
        throw error;
    }
};
