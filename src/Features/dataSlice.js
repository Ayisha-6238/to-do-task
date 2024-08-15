import { createSlice } from "@reduxjs/toolkit";



const dataSlice = createSlice({
    name: 'datas',
    initialState: [],
    reducers: {
        addData: (state, action) => {
            state.push({ name: action.payload, id: Date.now() })
        },
        deleteData: (state, action) => {
            return state.filter((data) => data.id !== action.payload)
        },
        editData: (state, action) => {
            const obj = state.find((data) => data.id == action.payload.id)
               if (obj){
                obj.name=action.payload.data
               }

            },

        }
    }
)


export default dataSlice.reducer
export const {addData,deleteData,editData} = dataSlice.actions