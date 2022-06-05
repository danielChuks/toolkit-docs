import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", name: "Desmond parrot"},
    {id: "2", name: "Faith Oghene"}
] ;

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{}
});




export const selectAllUsers = (state) => state.users;


export default usersSlice.reducer;