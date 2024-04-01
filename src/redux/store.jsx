import { configureStore } from '@reduxjs/toolkit'

// we can add logger 2 ways : 
// 1. third-party 
// 2. custom middleware 



// import logger from 'redux-logger'
import counterReducer from './features/counter/counterSlice'
import logger from './middlewares/logger'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})