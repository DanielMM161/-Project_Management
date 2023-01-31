import { createAsyncThunk } from "@reduxjs/toolkit";

import axios, { AxiosError } from 'axios';

import { BASE_URL } from "../utils/constants";

//TODO: need to define the endpoints
export const createNewProject = createAsyncThunk('createNewProject',
  async (projectName: string, thunkAPI) => {

  return true
  // const response = await axios.post(`${BASE_URL}`, {
  //    name: projectName
  // })

  // if(response.status === 200) {    
  //   localStorage.setItem('user', JSON.stringify(response.data))
  //   return response.data
  // } else {
  //   thunkAPI.rejectWithValue(null)
  // }
})