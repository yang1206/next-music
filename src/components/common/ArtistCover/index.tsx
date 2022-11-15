import { memo } from 'react'
import { useRouter } from 'next/router'
import { SingerItemWrapper } from './style'
import { getSizeImage } from '@/utils/format'

interface Props {
  coverPic: string
  singer: string
  id: number
}

const ArtistCover: React.FC<Props> = ({ coverPic, singer, id }: Props) => {
  const picUrl = (coverPic && getSizeImage(coverPic, 140)) || 'https://gitee.com/xmkm/cloudPic/raw/master/img/20210505140847.png'
  const router = useRouter()
  const toArtist = () => {
    router.push(`/artist?id=${id}`)
  }
  return (
    <SingerItemWrapper>
      <div
        className="cover-pic"
        onClick={() => {
          toArtist()
        }}
      >
        <img src={picUrl} alt="" />
        <span className="image_cover"></span>
      </div>
      <p className="singer-info">
        <a
          onClick={() => {
            toArtist()
          }}
        >
          {singer}
        </a>
        {/* <i className="sprite_icon2 singer_icon"></i> */}
      </p>
    </SingerItemWrapper>
  )
}
export default memo(ArtistCover)
