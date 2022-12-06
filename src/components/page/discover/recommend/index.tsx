import Banner from './components/banner'
import HotRecommend from './components/hotRecommend'
import NewAlbum from './components/newAlbum'
import Ranking from './components/ranking'
import { RecommendWarper } from './style'
const Recommend = () => {
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
export default Recommend
