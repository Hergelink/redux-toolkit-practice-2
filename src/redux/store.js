import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import nameReducer from './namer';


export default configureStore({
    reducer: {
        counter: counterReducer,
        handleName: nameReducer,

    }
})