import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.jsx';

const configure = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default configure;