import { createSlice , PayloadAction } from "@reduxjs/toolkit";

export interface initialStateType {
    isSidebarColapsed : boolean;
    isDarkMood : boolean;
}

const initialState : initialStateType = {
    isSidebarColapsed : false,
    isDarkMood : false,
}

export const globalSlice = createSlice({
    name : `global`,
    initialState,
    reducers :{
        setIsSidebarCollapsed : (state ,action:PayloadAction<boolean>) => {
            state.isSidebarColapsed = action.payload;
        }
    }
})