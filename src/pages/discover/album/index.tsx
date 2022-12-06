import React, { memo } from 'react'
import HotAlbum from 'src/components/page/discover/album/HotAlbum'
import AllAlbum from 'src/components/page/discover/album/AllAlbum'
import { PlaylistWrapper } from 'src/styles/page/discover/album'
import NavBar from 'src/components/common/NavBar'
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
