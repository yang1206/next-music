import React, { memo, useEffect } from 'react'
import { RankingWrapper } from './style'
import RcmHeader from 'src/components/common/RcmHeader'
import TopRanking from 'src/components/common/TopRanking'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { getTopLists, selectTopList } from 'src/store/slice/recommend'
const NewAlbum: React.FC = () => {
  const props = {
    title: '榜单',
    keywords: [],
    keywordClick: () => {
      //
    },
    moreLink: '/discover/ranking',
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    // 飙升榜
    dispatch(getTopLists(19723756))
    // 新歌榜
    dispatch(getTopLists(3779629))
    // 原创榜
    dispatch(getTopLists(2884035))
  }, [dispatch])
  const { newList, riseList, originalList } = useAppSelector(selectTopList).data
  return (
    <RankingWrapper>
      <RcmHeader {...props} />
      <div className="tops">
        <TopRanking info={riseList} />
        <TopRanking info={newList} />
        <TopRanking info={originalList} />
      </div>
    </RankingWrapper>
  )
}
export default memo(NewAlbum)
