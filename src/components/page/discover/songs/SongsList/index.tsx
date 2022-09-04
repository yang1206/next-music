import React, { useState, memo } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { selectCategorySongs, getPlayList } from '@/store/slice/SongList'
import { Skeleton } from 'antd'
import SongsCover from '@/components/common/SongsCover'
import Pagination from '@/components/common/Pagination'
import { Recommend } from '@/store/interface/recommend'
import { SongsListWrapper } from './style'
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
      {!songsList.length ? (
        <Skeleton active />
      ) : (
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
