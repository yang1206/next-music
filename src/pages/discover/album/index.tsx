import React, { memo } from 'react'
import HotAlbum from '@/components/page/discover/album/HotAlbum'
import AllAlbum from '@/components/page/discover/album/AllAlbum'
import { PlaylistWrapper } from '@/styles/page/discover/album'
import NavBar from '@/components/common/NavBar'
const Songs: React.FC = () => {
  return (
    <>
      <NavBar />
      <PlaylistWrapper className="wrap-v2">
        <HotAlbum />
        <AllAlbum />
      </PlaylistWrapper>
    </>
  )
}
export default memo(Songs)
