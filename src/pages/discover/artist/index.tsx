import React, { useEffect, useState, memo } from 'react'
import { useRouter } from 'next/router'
import { getArtistsList } from '@/api/artist'
import ArtistCategory from '@/components/page/discover/artist/ArtistCategory'
import ArtistCover from '@/components/common/ArtistCover'
import Pagination from '@/components/common/Pagination'
import NavBar from '@/components/common/NavBar'
import { AllAlbumWrapper } from './style'
//TODO 完成歌手
const ArtistList: React.FC = () => {
  const router = useRouter()
  const { area, type, cat }: any = router.query
  const [artistList, setArtistList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    getArtistsList(type, area, cat, currentPage).then(res => {
      setArtistList(res.artists)
    })
  }, [area, type, cat, currentPage])
  function onPageChange(page: React.SetStateAction<number>) {
    window.scroll(0, 0)
    setCurrentPage(page)
  }
  return (
    <>
      <NavBar />
      <AllAlbumWrapper>
        <div className="Artist-list-content wrap-v2">
          <div className="ArtistListLeft">
            <div className="Artist-list-container">
              <ArtistCategory />
            </div>
          </div>
          <div className="ArtistListRight">
            <div className="artistList">
              {artistList &&
                artistList.map(item => {
                  return <ArtistCover key={item.id} id={item.id} coverPic={item.picUrl} singer={item.name} />
                })}
            </div>
            <Pagination currentPage={currentPage} total={200} pageSize={35} onPageChange={onPageChange} />
          </div>
        </div>
      </AllAlbumWrapper>
    </>
  )
}
export default memo(ArtistList)
