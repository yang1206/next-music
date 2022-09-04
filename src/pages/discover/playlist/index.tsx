import React, { useEffect, memo } from 'react'
import { useRouter } from 'next/router'
// import { getQueryObject } from '@/utils/format'
import { useAppDispatch } from '@/hooks/useStore'
import { getCategory, getPlayList, changeCurrentCategory } from '@/store/slice/SongList'
import NavBar from '@/components/common/NavBar'
import SongsHeader from '@/components/page/discover/songs/SongsHeader'
import SongsList from '@/components/page/discover/songs/SongsList'
import { PlaylistWrapper } from './style'
const Songs: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { cat }: any = router.query
  useEffect(() => {
    dispatch(changeCurrentCategory(cat))
  }, [dispatch, cat])
  // hooks
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getPlayList(0))
  }, [dispatch])
  return (
    <>
      <NavBar />
      <PlaylistWrapper className="wrap-v2">
        <SongsHeader />
        <SongsList />
      </PlaylistWrapper>
    </>
  )
}
export default memo(Songs)
