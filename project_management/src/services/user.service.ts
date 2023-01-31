import { createAsyncThunk } from "@reduxjs/toolkit";

import axios, { AxiosError } from 'axios';

import { IUser, IUserAuth, IUserRegister } from "../models/user.model";
import { BASE_URL } from "../utils/constants";

const mockUser: IUser = {
  fullName: "Daniel",
  email: "daniel@test.com",
  projects: []
}

//TODO: need to define the endpoints
export const fetchUserProfile = createAsyncThunk('fetchUserProfile',
  async (token: string, thunkAPI) => {

  mockUser.projects.push("new project")
  return mockUser;

  // const response = await axios.get(`${BASE_URL}/auth/profile`, {
  //   headers: {
  //       Authorization : `Bearer ${token}`
  //   }
  // })

  // if(response.status === 200) {    
  //   localStorage.setItem('user', JSON.stringify(response.data))
  //   return response.data
  // } else {
  //   thunkAPI.rejectWithValue(null)
  // }
})

//TODO: need to define the endpoints
export const fetchUserSession = createAsyncThunk('fetchUserSession',
  async (_, thunkAPI) => {
  thunkAPI.dispatch(fetchUserProfile(""))
  // const token = localStorage.getItem('access_token')  
  // if(token != null) {
  //   thunkAPI.dispatch(fetchUserProfile(JSON.parse(token)))
  // } else {
  //   thunkAPI.rejectWithValue(null)
  // }
})

//TODO: need to define the endpoints
export const createUser = createAsyncThunk('createUser',
  async (userRegistration: IUserRegister, thunkAPI) => {
  return mockUser
  // const response = await axios.post(`${BASE_URL}/users`, {
  //   name: userRegistration.fullName,
  //   email: userRegistration.email,
  //   password: userRegistration.password,    
  // })

  // if(response.status === 201 || response.status === 200) {
  //   return response.data
  // } else {  
  //   thunkAPI.rejectWithValue(null)
  // }  
})

//TODO: need to define the endpoints
export const loginUser = createAsyncThunk('loginUser',
  async (userLogin: IUserAuth, thunkAPI) => {
    return mockUser
    // try {      
    //   const response = await axios.post(`${BASE_URL}/auth/login`, {
    //     email: userLogin.email,
    //     password: userLogin.password
    //   })

    //   if (response.status === 201) {
    //     const value = response.data
    //     localStorage.setItem('access_token', JSON.stringify(value['access_token']))
    //     thunkAPI.dispatch(fetchUserSession())
    //     return value
    //   }       
    //   return null         
    // } catch (error: unknown) {
    //   return null  
    // }   
})
