import axios from "axios";
import { API } from "../config/axios";

export const RegisterCall = async (params) => {
    const { data } = await API.post(`${import.meta.env.VITE_API_KEY}/site/register`, params);
    return data;
};


export const LoginCall = async (params) => {
    let { data } = await API.post(
        `/${import.meta.env.VITE_API_KEY}/login`,
        params
    );
    return data;
};

export const ProfileCall = async () => {
    try {
        const { data } = await API.get(`/${import.meta.env.VITE_API_KEY}/profile`);
        return data;
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw error; 
    }
};


export const AdminsCall = async (params) => {
    let { data } = await API.post(
        `/${import.meta.env.VITE_API_KEY}/dashboard/register`,
        params
    );
    return data;
};

export const AdminsGetAll = async () => {
    let { data } = await API.get(`${import.meta.env.VITE_API_KEY}/dashboard/users`);
    return data;
}

export const DeleteAdmin = async (id) => {
    let {data}=await API.delete(`${import.meta.env.VITE_API_KEY}/dashboard/users/${id}`);
    return data;
    }

export const Logout = () => {
    localStorage.removeItem('token');
};
  