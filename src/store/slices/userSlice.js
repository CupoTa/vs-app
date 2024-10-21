import { createSlice } from '@reduxjs/toolkit'
import { useCloudStorage } from '../../hooks/useCloudStorage';
import WebApp from '@twa-dev/sdk';

const API_URL = import.meta.env.VITE_API_URL

const { getStorageItem, setStorageItem, removeItems } = useCloudStorage()

const initialState = {
    loading: "idle",
    tgID: 0,
    tgUserName: 'Guest',
    points: 0,
    lastTimeClaim: 0,
    lastTimeTap: 0,
    coeff: 1,
    value: 0,
    timestamp: 0  // последнее время получения ответа с БД
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoading: (state) => {
            if (state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        userReceived: (state, action) => {
            if (state.loading === 'pending') {
                return {...state, ...action.payload}
            }
        },
        setUser: (state, action) => {
            return {...state, ...action.payload}
        },
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload?.value
        },
    },
})

export const { increment, decrement, incrementByAmount, userLoading, userReceived, setUser } = userSlice.actions

export const selectUser = (state) => state.user

export const fetchUser = () => async (dispatch) => {

    dispatch(userLoading());
    // removeItems()

    // Проверяем есть ли в сторэйдж телеги поле session 
    getStorageItem('session')
    .then(data => {
        // есть поле
        // сравниваем timestamp с user.timestamp 
        // если совпало то обновляем локальный стейт из сторэйдж телеги
        // если нет то запрос на сервер из ответа заполняем локальный стейт
        // и сессию в сторэйдж
        const result = JSON.parse(data)

        if(result.timestamp == result.user.timestamp){
            // Да
            // записали в юзера из сторэйдж телеги
            setTimeout(() => {
                dispatch(userReceived(result.user))
            }, 1000)
            
            console.log("БЕЗ ЗАПРОСА", result)
        } else {
            // Нет
            // Запрос в БД из ответа записали в юзера
            
            fetch('https://dummyjson.com/todos?limit=10&skip=0')
            .then(res => res.json())
            .then((data) => {
                const user = {
                    ...initialState,
                    tgID: WebApp.initDataUnsafe?.user?.id,
                    tgUserName: WebApp.initDataUnsafe?.user?.first_name || "Guest",
                    points: 1074010,
                    lastTimeTap: 1729164688072,
                    lastTimeClaim: 1729164688072,
                    coeff: 3,
                    timestamp: Date.now()
                }
        
                const session = {
                    timestamp: Date.now(),
                    user: {
                        ...user,
                        timestamp: Date.now()
                    }
                }
                setStorageItem("session", JSON.stringify(session))
                setTimeout(() => {
                    dispatch(userReceived(user))
                }, 1000)
                console.log("ПОСЛЕ ЗАПРОСА", result)
            });

        }
    })
    .catch(err => {
        // нет поля, значит юзер новый
        // создаем нулевого юзера и объект session пишем в локальный стэйт и в сторэйдж телеги
        const user = {
            ...initialState
        }
        
        const session = {
            timestamp: 0,
            user: user
        }
        setStorageItem("session", JSON.stringify(session))
        setTimeout(() => {
            dispatch(userReceived(user))
        }, 1000)
        console.log("NO SESSION", err)
    })

};

export const updateUser = (user) => async (dispatch) => {

    // обновление юзера 
    // поинтов, time claim & tap
    dispatch(setUser(user))
    const session = {
        timestamp: Date.now(),
        user: user
    }
    setStorageItem("session", JSON.stringify(session))
    console.log("UPDATE USER", user)
}

export default userSlice.reducer