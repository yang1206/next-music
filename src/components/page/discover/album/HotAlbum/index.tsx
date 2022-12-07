import React, { memo, useEffect } from 'react'
import { Skeleton } from 'antd'
import { HotAlbumWrapper } from './style'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { getNewAlbums, selectNewAlbums } from 'src/store/slice/recommend'
import AlbumCover from 'src/components/common/AlbumCover'
import RcmHeader from 'src/components/common/RcmHeader'
const HotAlbum: React.FC = () => {
  const dispatch = useAppDispatch()
  const hotNewAlbums = useAppSelector(selectNewAlbums).data.slice(0, 10)
  useEffect(() => {
    dispatch(getNewAlbums())
  }, [dispatch])
  const CoverProps = {
    width: '150px',
    size: '130px',
    bgp: '-845px',
  }
  return (
    <HotAlbumWrapper>
      <RcmHeader title={'热门新碟'} right={<></>} />
      {!hotNewAlbums.length
        ? (
          <Skeleton active />
        )
        : (
          <div className="HotAlbum-list">
            {hotNewAlbums.map((item, index: number) => {
              return (
                <div key={index} className="HotAlbum-item">
                  <AlbumCover info={item} {...CoverProps} />
                </div>
              )
            })}
          </div>
        )}
    </HotAlbumWrapper>
  )
}
export default memo(HotAlbum)
