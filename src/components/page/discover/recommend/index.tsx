import React, { memo } from 'react'
import Banner from './components/banner'
import HotRecommend from './components/hotRecommend'
import NewAlbum from './components/newAlbum'
import Ranking from './components/ranking'
import { RecommendWarper } from './style'
const Recommend: React.FC = () => {
  return (
    <RecommendWarper>
      <Banner />
      <div className="Content wrap-v2">
        <div className="RecommendLeft">
          <HotRecommend />
          <NewAlbum />
          <Ranking />
        </div>
      </div>
    </RecommendWarper>
  )
}
export default memo(Recommend)
