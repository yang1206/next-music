import { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavBar from 'src/components/common/NavBar'
import { useAppDispatch } from 'src/hooks/useStore'
import { getSongListDetailData } from 'src/store/slice/SongList'
import SongListInfo from 'src/components/page/playlist/SongListInfo'
import { SongListWrapper } from 'src/styles/page/playlist'
const PlayList: React.FC = () => {
  const router = useRouter()
  const { id }: any = router.query
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSongListDetailData(id))
  }, [id, router, dispatch])
  return (
    <>
      <NavBar />
      <SongListWrapper>
        <div className="SongListContent">
          <SongListInfo />
        </div>
      </SongListWrapper>
    </>
  )
}
export default memo(PlayList)
