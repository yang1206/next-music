import React, { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { getQueryObject } from '@/utils/format'
import { useAppDispatch } from 'src/hooks/useStore'
import { changeCurrentCategory, getCategory, getPlayList } from 'src/store/slice/SongList'
import NavBar from 'src/components/common/NavBar'
import SongsHeader from 'src/components/page/discover/songs/SongsHeader'
import SongsList from 'src/components/page/discover/songs/SongsList'
import { PlaylistWrapper } from 'src/styles/page/discover/playlist'
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
