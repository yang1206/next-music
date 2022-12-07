import React, { memo } from 'react'
import Link from 'next/link'
import { TopRankingWrapper } from './style'
import { getSizeImage } from 'src/utils/format'
import type { Recommend } from 'src/store/interface/recommend'
import { getSong /* changeCurrentSong, changePlayList, changeCurrentIndex */, selectPlayList } from 'src/store/slice/Player'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'

import { useAddPlaylist } from 'src/hooks/useAddPlaylist'
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
          <Link href="/discover/ranking" className="image_cover">
            ranking
          </Link>
        </div>
        <div className="info">
          <Link href="/discover/ranking">{info?.name}</Link>
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
        <Link href="/discover/ranking">查看全部 &gt;</Link>
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
