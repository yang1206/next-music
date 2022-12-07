import React, { memo } from 'react'
import { FieldTimeOutlined } from '@ant-design/icons'
import { TopListTitleWrapper } from './style'
import { useAppSelector } from 'src/hooks/useStore'
import { selectCurrentTopListTitleInfo } from 'src/store/slice/TopList'
import { formatMonthDay, getSizeImage } from 'src/utils/format'
const TopListTitle = () => {
  const titleInfo = useAppSelector(selectCurrentTopListTitleInfo).data
  const picUrl = titleInfo && titleInfo.coverImgUrl
  const name = titleInfo && titleInfo.name
  const updateTime = titleInfo && titleInfo.trackNumberUpdateTime
  const commentCount = titleInfo && titleInfo.commentCount
  const shareCount = titleInfo && titleInfo.shareCount
  const subscribedCount = titleInfo && titleInfo.subscribedCount
  return (
    <TopListTitleWrapper>
      <div className="title-image">
        <img src={getSizeImage(picUrl, 150)} alt="" />
        <div className="image_cover msk"></div>
      </div>
      <div className="title-info">
        <h2>{name}</h2>
        <div className="update-info">
          <FieldTimeOutlined className="timer" />
          最近更新: {formatMonthDay(updateTime)}
        </div>
        <div className="controls">
          <div className="sprite_button play">
            <i className="sprite_button inner">
              <em className="sprite_button play-icon"></em>
              播放
            </i>
          </div>
          <div className="sprite_button favorite">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>({subscribedCount})
            </i>
          </div>
          <div className="sprite_button share">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>({shareCount})
            </i>
          </div>
          <div className="sprite_button download">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>
              下载
            </i>
          </div>
          <div className="sprite_button comment">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>({commentCount})
            </i>
          </div>
        </div>
      </div>
    </TopListTitleWrapper>
  )
}
export default memo(TopListTitle)
