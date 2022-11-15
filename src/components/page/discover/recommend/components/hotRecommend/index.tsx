import React, { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { HotRecommendWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { getPersonalized, selectPersonalized } from '@/store/slice/recommend'
import type { Recommend } from '@/store/interface/recommend'
import RcmHeader from '@/components/common/RcmHeader'
import SongsCover from '@/components/common/SongsCover'
// import { useNavigate } from 'react-router-dom'
const HotRecommend: React.FC = () => {
  const router = useRouter()
  const props = {
    title: '热门推荐',
    keywords: ['华语', '流行', '民谣', '摇滚', '电子'],
    moreLink: '/discover/playlist',
    keywordClick: (item?: string) => {
      router.push(`/discover/playlist?cat=${item}`)
    },
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getPersonalized())
  }, [])
  const PersonalizedData = useAppSelector(selectPersonalized)
  if (!PersonalizedData)
    return null
  return (
    <HotRecommendWrapper>
      <RcmHeader {...props} />
      <div className="recommend-list">
        {PersonalizedData?.data.map((item: Recommend.perSonalizeder) => {
          return <SongsCover key={item.id} info={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}
export default memo(HotRecommend)
