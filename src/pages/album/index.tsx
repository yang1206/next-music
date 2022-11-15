import { memo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from '@/components/common/NavBar'
import { getAlbumDetail } from '@/api/album'
import AlbumInfo from '@/components/page/album/AlbumInfo'
import { AlbumDetailWrapper } from '@/styles/page/album'
const Album: React.FC = () => {
  const [albumDetail, setAlbum] = useState()
  const router = useRouter()
  const { id }: any = router.query
  useEffect(() => {
    getAlbumDetail(id).then((res) => {
      setAlbum(res)
    })
  }, [id, router])
  return (
    <>
      <NavBar />
      <AlbumDetailWrapper>
        <div className="AlbumDetailContent">
          <AlbumInfo albumDetail={albumDetail} />
        </div>
      </AlbumDetailWrapper>
    </>
  )
}
export default memo(Album)
