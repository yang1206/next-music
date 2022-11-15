import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import { persistReducer } from 'redux-persist'
// 中间件插件示例：添加redux-logger中间件
// import logger from 'redux-logger'
// import counterSlice from './slice/demo'
import recommendSlice from './slice/recommend'
import playerSlice from './slice/Player'
import searchSlice from './slice/Search'
import SongListSlice from './slice/SongList'
import LoginSlice from './slice/Login'
import TopListSlice from './slice/TopList'
const reducers = combineReducers({
  recommend: recommendSlice,
  player: playerSlice,
  search: searchSlice,
  songList: SongListSlice,
  login: LoginSlice,
  topList: TopListSlice,
})
const persistConfig = {
  key: 'root',
  storage,
  // 只需要存储登录信息，否则会出现客户端与服务端不一致的情况
  whitelist: ['login'],
}
// 持久化redux
const persistedReducer = persistReducer(persistConfig, reducers)
const store = configureStore({
  reducer: persistedReducer,
  // 使用redux-logger中间件
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // 生产环境关闭devTools // 安装dev工具  chrome应用商店 安装 React Developer Tools
  devTools: process.env.NODE_ENV !== 'production',
})
// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof store.getState>
// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof store.dispatch
export default store
