import {configureStore}from '@reduxjs/toolkit';
import weatherReducers from '../weatherSlice';
export const store =configureStore({
    reducer:{
        weather:weatherReducers
    }
});
