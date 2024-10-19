import { createSlice } from '@reduxjs/toolkit'
import data from '../../components/Quest/db.json'

const initialState = {
    loading: "idle",
    data: []
}

export const questsSlice = createSlice({
    name: 'quests',
    initialState,
    reducers: {
        questsLoading(state) {
            if (state.loading === 'idle') {
                state.loading = 'pending';
              }
        },
        questsReceived(state, action) {
            state.loading = 'idle';
            state.data = action.payload;
        }
    }
})

export const { questsLoading, questsReceived } = questsSlice.actions

export const selectQuests = (state) => state.quests

export const fetchQuests = () => async (dispatch) => {
    dispatch(questsLoading())
    
    fetch('https://dummyjson.com/todos?limit=10&skip=0')
            .then(res => res.json())
            .then((t) => {
                
                
            })

            setTimeout(() => {
                dispatch(questsReceived(data))
            }, 5000)
    
}

export default questsSlice.reducer