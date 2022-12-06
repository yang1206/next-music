import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import RcmHeader from 'src/components/common/RcmHeader'
import PlayList from 'src/components/common/PlayList'
import {
  getTopListItem,
  selectCurrentTopList,
  selectCurrentTopListId,
  selectCurrentTopListTitleInfo,
} from 'src/store/slice/TopList'
import { TopListMainWrapper } from './style'
const TopListMain: React.FC = () => {
  const playCount = useAppSelector(selectCurrentTopListTitleInfo).data.playCount
  const currentTopListId = useAppSelector(selectCurrentTopListId).data
  const currentTopList = useAppSelector(selectCurrentTopList).data

  const dispatch = useAppDispatch()
  // other hook
  useEffect(() => {
    dispatch(getTopListItem(currentTopListId))
  }, [dispatch, currentTopListId])
  // other handle
  const rightSlot = (
    <span>
      播放：<em style={{ color: '#c20c0c' }}>{playCount}</em>次
    </span>
  )
  return (
    <TopListMainWrapper>
      <RcmHeader title="歌曲列表" right={rightSlot} />
      <PlayList playlist={currentTopList} hideAl={true} />
    </TopListMainWrapper>
  )
}
export default memo(TopListMain)
