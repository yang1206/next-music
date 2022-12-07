import React, { memo, useEffect, useState } from 'react'
import { AllAlbumWrapper } from './style'
import { getNewAlbums } from 'src/api/recommend'
import AlbumCover from 'src/components/common/AlbumCover'
import RcmHeader from 'src/components/common/RcmHeader'
import Pagination from 'src/components/common/Pagination'
import type { Recommend } from 'src/store/interface/recommend'
const AllAlbum: React.FC = () => {
  const [albumList, setAlbumList] = useState<any>({})
  useEffect(() => {
    getNewAlbums().then((res) => {
      setAlbumList(res)
    })
  }, [])
  const total = albumList.total || 0
  const [currentPage, setCurrentPage] = useState(1)
  const onPageChange = (page: React.SetStateAction<number>) => {
    // window.scroll(0, 0)
    setCurrentPage(page)
    getNewAlbums('', 35, page).then((res) => {
      setAlbumList(res)
    })
  }
  const CoverProps = {
    width: '150px',
    size: '130px',
    bgp: '-845px',
  }
  const area = ['ALL', 'ZH', 'EA', 'KR', 'JP']
  const HeaderProps = {
    title: '全部新碟',
    keywords: ['全部', '华语', '欧美', '韩国', '日本'],
    keywordClick: (item: string, index: any) => {
      getNewAlbums(area[index]).then((res) => {
        setAlbumList(res)
      })
    },
  }
  return (
    <AllAlbumWrapper>
      <RcmHeader {...HeaderProps} />
      <div className="HotAlbum-list">
        {albumList
          && albumList.albums
          && albumList.albums.map((item: Recommend.NewAlbums, index: number) => {
            return (
              <div key={index} className="HotAlbum-item">
                <AlbumCover info={item} {...CoverProps} />
              </div>
            )
          })}
      </div>
      <Pagination currentPage={currentPage} total={total} pageSize={35} onPageChange={onPageChange} />
    </AllAlbumWrapper>
  )
}
export default memo(AllAlbum)
