import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import {create} from 'zustand'
export const useAuthStore = create((set)=>({
    user:null,
    isSigninUp:false,
    isCheckingAuth: true,
    isLogginOut: false,
    signup: async (credentials)=>{
        set({isSigninUp:true})
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials);
            set({user:response.data.user, isSigninUp:false})
            toast.success("Account created successfully")
        } catch (error) {
            toast.error(error.response.data.message || "An error occurred")
            set({isSigninUp:false, user: null})
        }
    },
    login: async ()=>{},
    logout: async ()=>{
        set({isLogginOut: true})
        try {
            await axios.post("/api/v1/auth/logout");
            set({user:null, isLogginOut: false})
        } catch (error) {
            set({isLogginOut: false})
            toast.error(error.response.data.message || "Logged out successfully")
        }
    },
    authCheck: async ()=>{
        set({isCheckingAuth: true})
        try {
            const response = await axios.get("/api/v1/auth/authCheck")
            set({user:response.data.user, isCheckingAuth: false})
        } catch (error) {
            set({isCheckingAuth: false, user:null});
            toast.error(error.response.data.message || "Logout failed")
        }
    },
}))
