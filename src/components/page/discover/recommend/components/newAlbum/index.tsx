import React, { memo, useEffect, useRef } from 'react'
import type { CarouselRef } from 'antd/lib/carousel'
import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
import RcmHeader from '@/components/common/RcmHeader'
import AlbumCover from '@/components/common/AlbumCover'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { getNewAlbums, selectNewAlbums } from '@/store/slice/recommend'
const NewAlbum: React.FC = () => {
  // 传递给头部卡片
  const headerProps = {
    title: '新碟上架',
    keywords: [],
    keywordClick: () => {
      // navigate('/discover/songs')
    },
    moreLink: '/discover/album',
  }
  // 传递给专辑卡片的数据
  const CoverProps = {
    width: '118px',
    size: '100px',
    bgp: '-570px',
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getNewAlbums())
  }, [])
  // 从store取出banners
  const newAlbums = useAppSelector(selectNewAlbums)
  const pageRef = useRef<CarouselRef>(null)
  if (!newAlbums)
    return null
  return (
    <AlbumWrapper>
      <RcmHeader {...headerProps} />
      <div className="albumContent">
        <button onClick={() => pageRef.current?.prev()} className="arrow arrow-left sprite_02"></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums?.data.slice(item * 5, (item + 1) * 5).map((info) => {
                    return <AlbumCover key={info.id} info={info} {...CoverProps} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button onClick={() => pageRef.current?.next()} className="arrow arrow-right sprite_02"></button>
      </div>
    </AlbumWrapper>
  )
}
export default memo(NewAlbum)
