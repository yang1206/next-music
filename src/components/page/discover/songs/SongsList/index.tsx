import React, { memo, useState } from 'react'
import { Skeleton } from 'antd'
import { SongsListWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { getPlayList, selectCategorySongs } from '@/store/slice/SongList'
import SongsCover from '@/components/common/SongsCover'
import Pagination from '@/components/common/Pagination'
import type { Recommend } from '@/store/interface/recommend'
const SongsList: React.FC = () => {
  const dispatch = useAppDispatch()
  const categorySongs = useAppSelector(selectCategorySongs).data
  const songsList = categorySongs.playlists || []
  const total = categorySongs.total || 0
  // hooks
  const [currentPage, setCurrentPage] = useState(1)
  function onPageChange(page: React.SetStateAction<number>) {
    window.scroll(0, 0)
    setCurrentPage(page)
    dispatch(getPlayList(page))
  }
  return (
    <SongsListWrapper>
      {!songsList.length
        ? (
        <Skeleton active />
          )
        : (
        <div className="songs-list">
          {songsList.map((item: Recommend.perSonalizeder, index: number) => {
            return <SongsCover key={index} info={item} />
          })}
        </div>
          )}
      <Pagination currentPage={currentPage} total={total} pageSize={35} onPageChange={onPageChange} />
    </SongsListWrapper>
  )
}
export default memo(SongsList)
