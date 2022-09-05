import React, { useEffect, memo } from 'react'
import RcmHeader from '@/components/common/RcmHeader'
import TopRanking from '@/components/common/TopRanking'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { selectTopList, getTopLists } from '@/store/slice/recommend'
import { RankingWrapper } from './style'
const NewAlbum: React.FC = () => {
  const props = {
    title: '榜单',
    keywords: [],
    keywordClick: () => {
      //
    },
    moreLink: '/discover/ranking'
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    //飙升榜
    dispatch(getTopLists(19723756))
    //新歌榜
    dispatch(getTopLists(3779629))
    //原创榜
    dispatch(getTopLists(2884035))
  }, [])
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