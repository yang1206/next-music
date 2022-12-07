import React, { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { getTopListInfo, getTopListTitleInfo, selectCurrentTopListId, selectTopListInfo } from 'src/store/slice/TopList'
import TopListTitle from 'src/components/page/discover/ranking/Title'
import TopListMain from 'src/components/page/discover/ranking/Main'
import TopListInfo from 'src/components/page/discover/ranking/TopList'
import NavBar from 'src/components/common/NavBar'
import { TopListWrapper } from 'src/styles/page/discover/ranking'
const Ranking: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const topListInfo = useAppSelector(selectTopListInfo).data
  const currentTopListId = useAppSelector(selectCurrentTopListId).data
  useEffect(() => {
    // 榜单item
    dispatch(getTopListInfo(null))
  }, [dispatch])
  // 排行榜头部信息
  useEffect(() => {
    // 派发榜单标题信息Action
    let { id }: any = router.query
    id = id || currentTopListId
    dispatch(getTopListTitleInfo(id))
  }, [currentTopListId, router.query, dispatch])
  return (
    <>
      <NavBar />
      <TopListWrapper className="wrap-bg2">
        <div className="top-list-content wrap-v2">
          <div className="TopListLeft">
            <div className="top-list-container">
              <TopListInfo topListInfo={topListInfo} />
            </div>
          </div>
          <div className="TopListRight">
            <TopListTitle />
            <TopListMain />
          </div>
        </div>
      </TopListWrapper>
    </>
  )
}
export default memo(Ranking)
