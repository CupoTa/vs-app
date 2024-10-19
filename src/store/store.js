import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import userReducer from './slices/userSlice'
import questsReduser from './slices/questsSlice'

const rootReducer = combineReducers({
  user: userReducer,
  quests: questsReduser,
});

export const store = configureStore({
  reducer: rootReducer
})