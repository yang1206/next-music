import React, { memo } from 'react'
import { TopRankingWrapper } from './style'
import { getSizeImage } from '@/utils/format'
import type { Recommend } from '@/store/interface/recommend'
import { getSong /* changeCurrentSong, changePlayList, changeCurrentIndex */, selectPlayList } from '@/store/slice/Player'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'

import { useAddPlaylist } from '@/hooks/useAddPlaylist'
interface Props {
  info: Recommend.topItem
}
const TopRanking: React.FC<Props> = (props) => {
  const { info } = props
  const dispatch = useAppDispatch()
  const playList = useAppSelector(selectPlayList).data
  const playMusic = (item: any) => {
    dispatch(getSong({ id: item.id, isPlay: true }))
  }
  const addPlaylist = useAddPlaylist(playList)
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info?.coverImgUrl)} alt="" />
          <a href="/discover/ranking" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/discover/ranking">{info?.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {info.tracks?.slice(0, 10).map((item: any, index: number) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <a className="name text-nowrap" onClick={() => playMusic(item)}>
                  {item.name}
                </a>
                <div className="operate">
                  <button className="btn sprite_02 play" onClick={() => playMusic(item)}></button>
                  <button className="btn sprite_icon2 addto" onClick={e => addPlaylist(e, item.id)}></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="/discover/ranking">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
