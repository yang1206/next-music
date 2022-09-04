import { useEffect, memo } from 'react'
import { useRouter } from 'next/router'
import NavBar from '@/components/common/NavBar'
import { useAppDispatch } from '@/hooks/useStore'
import { getSongListDetailData } from '@/store/slice/SongList'
import SongListInfo from '@/components/page/playlist/SongListInfo'
import { SongListWrapper } from './style'
const PlayList: React.FC = () => {
  const router = useRouter()
  const { id }: any = router.query
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSongListDetailData(id))
  }, [id, router])
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
