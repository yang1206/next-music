import React, { useEffect, useState, useCallback, memo } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { changeIsVisible, selectLoginState } from '@/store/slice/Login'
import { getRecommendsongs } from '@/api/recommend'
import DateHeader from '@/components/page/discover/dailysongs/Date'
import RcmHeader from '@/components/common/RcmHeader'
import Authentication from '@/components/common/Authentication'
import PlayList from '@/components/common/PlayList'
import NavBar from '@/components/common/NavBar'
import { DayRecommendContent } from './style'
const DailySongs: React.FC = () => {
  const [recommendPlaylist, setRecommendPlaylist] = useState([])
  const router = useRouter()
  const dispatch = useAppDispatch()
  const isLogin = useAppSelector(selectLoginState).data
  // 获取推荐歌单列表
  useEffect(() => {
    isLogin &&
      getRecommendsongs().then(res => {
        const result = res.data
        setRecommendPlaylist(result.dailySongs)
      })
  }, [isLogin])
  const toRedirect = useCallback(() => {
    router.push(`/`)
  }, [router])
  const showModal = useCallback(() => {
    dispatch(changeIsVisible(true))
  }, [dispatch])
  return (
    <>
      <NavBar />
      <div className="wrap-v2" style={{ border: 'solid 1px #d3d3d3' }}>
        <Authentication flag={isLogin} to={toRedirect} showModal={showModal} />
        <DayRecommendContent className="daycontent" style={{ display: isLogin ? 'block' : 'none' }}>
          <div className="recommend-cover-bg">
            <DateHeader />
          </div>
          <div className="main">
            <RcmHeader title="包含歌曲列表" right={<></>} />
            <PlayList playlist={recommendPlaylist} />
          </div>
        </DayRecommendContent>
      </div>
    </>
  )
}
export default memo(DailySongs)
