'use client'
import { useEffect } from 'react'
import { BackTop, Layout } from 'antd'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useAppDispatch } from 'src/hooks/useStore'
import initLoginInfo from 'src/config/token'
import { getLoginInfo, setLoginInfo } from 'src/utils/secretKey'
import { getLoginProfileInfo } from 'src/store/slice/Login'
import { getSongDetailArray } from 'src/store/slice/Player'
import { useGlobalKeyboardEvent } from 'src/hooks/useKeyboard'
import { addPlaylistId, getCurrentSongIndex, getPlaylistId, initCurrentSongIndex } from 'src/utils/storage'
import { SONG_PLAYLIST_ID as songPlayListId } from 'src/common/constants'
import Header from '@/layouts/components/Header'
import Footer from '@/layouts/components/Footer'
const { Content } = Layout
interface LayoutProps {
  children: React.ReactNode
}
const LayoutIndex = ({ children }: LayoutProps) => {
  // redux hook
  const dispatch = useAppDispatch()

  // 初始化
  const initLogin = () => {
    // 存在登录信息
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('loginInfo') != null) {
        const { username, password } = getLoginInfo('loginInfo')
        if (username && password)
          dispatch(getLoginProfileInfo({ username, password }))
      }
      // 不存在登录信息
      else {
        setLoginInfo('loginInfo', initLoginInfo)
      }
    }
  }
  initLogin()

  // 添加默认歌曲ID(本地存储默认歌曲id)
  useEffect(() => {
    addPlaylistId(songPlayListId)
    // 初始化音乐索引
    initCurrentSongIndex()
  }, [])

  // 本地存储读取歌曲列表ID
  useEffect(() => {
    // 动态获取locals store音乐索引
    const index = getCurrentSongIndex()
    dispatch(getSongDetailArray({ listId: getPlaylistId(), index }))
  }, [dispatch])
  // 全局唤醒搜索框hook
  useGlobalKeyboardEvent()
  return (
    <Layout>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
      <BackTop />
    </Layout>
  )
}
export default LayoutIndex
