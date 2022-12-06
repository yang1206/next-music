import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import recommendSlice from './slice/recommend'
import playerSlice from './slice/Player'
import searchSlice from './slice/Search'
import SongListSlice from './slice/SongList'
import LoginSlice from './slice/Login'
import TopListSlice from './slice/TopList'
export const subjectSlice = createSlice({
  name: 'subject',

  initialState: {} as any,

  reducers: {
    setEnt(state, action) {
      return action.payload
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log('HYDRATE', state, action.payload)
      return {
        ...state,
        ...action.payload.subject,
      }
    },
  },
})
const makeStore = () =>
  configureStore({
    reducer: {
      recommend: recommendSlice,
      player: playerSlice,
      search: searchSlice,
      songList: SongListSlice,
      login: LoginSlice,
      topList: TopListSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
  })
export type AppStore = ReturnType<typeof makeStore>
// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<AppStore['getState']>
// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
export const fetchSubject
  = (id: any): AppThunk =>
    async (dispatch) => {
      const timeoutPromise = (timeout: number) =>
        new Promise(resolve => setTimeout(resolve, timeout))

      await timeoutPromise(200)

      dispatch(
        subjectSlice.actions.setEnt({
          [id]: {
            id,
            name: `Subject ${id}`,
          },
        }),
      )
    }
export const wrapper = createWrapper<AppStore>(makeStore)
export const selectSubject = (id: any) => (state: RootState) =>
  state?.[subjectSlice.name]?.[id]
