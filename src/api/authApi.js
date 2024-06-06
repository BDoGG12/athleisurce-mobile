import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (email, password) => {
    try {
    const response = await axios.post(`https://localhost:44375/api/Auth/login`, { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    return response.data;
    } catch (error) {
        console.log('error log in', error);
        throw error;
    }
};

export const register = async (customerInfo) => {
    try {
        const res = await axios.post('https://localhost:44375/api/RegisterCustomer', customerInfo);
        return res.data;
    } catch (error) {
        throw error;
    }
};