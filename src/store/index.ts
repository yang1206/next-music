import { configureStore } from '@reduxjs/toolkit'
//中间件插件示例：添加redux-logger中间件
// import logger from 'redux-logger'
// import counterSlice from './slice/demo'
import recommendSlice from './slice/recommend'
import playerSlice from './slice/Player'
import searchSlice from './slice/Search'
import SongListSlice from './slice/SongList'
import LoginSlice from './slice/Login'
import TopListSlice from './slice/TopList'
const store = configureStore({
  reducer: {
    // counter: counterSlice,
    recommend: recommendSlice,
    player: playerSlice,
    search: searchSlice,
    songList: SongListSlice,
    login: LoginSlice,
    topList: TopListSlice
  },
  //使用redux-logger中间件
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  //生产环境关闭devTools // 安装dev工具  chrome应用商店 安装 React Developer Tools
  devTools: process.env.NODE_ENV !== 'production'
})
// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof store.getState>
// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof store.dispatch
export default store
