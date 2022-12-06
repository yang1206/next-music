import React, { memo, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { changeIsVisible, selectLoginState } from 'src/store/slice/Login'
import { getRecommendsongs } from 'src/api/recommend'
import DateHeader from 'src/components/page/discover/dailysongs/Date'
import RcmHeader from 'src/components/common/RcmHeader'
import Authentication from 'src/components/common/Authentication'
import PlayList from 'src/components/common/PlayList'
import NavBar from 'src/components/common/NavBar'
import { DayRecommendContent } from 'src/styles/page/discover/dailysongs'
const DailySongs: React.FC = () => {
  const [recommendPlaylist, setRecommendPlaylist] = useState([])
  const router = useRouter()
  const dispatch = useAppDispatch()
  const isLogin = useAppSelector(selectLoginState).data
  // 获取推荐歌单列表
  useEffect(() => {
    isLogin
      && getRecommendsongs().then((res) => {
        const result = res.data
        setRecommendPlaylist(result.dailySongs)
      })
  }, [isLogin])
  const toRedirect = useCallback(() => {
    router.push('/')
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
