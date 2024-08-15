import {configureStore} from '@reduxjs/toolkit'
import dataReducer from './Features/dataSlice'



const Store=configureStore({
    reducer:{
        datas:dataReducer
}
    
        
})

export default Store