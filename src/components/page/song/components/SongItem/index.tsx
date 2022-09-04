import React, { memo } from 'react'
import Link from 'next/link'
import { useAddPlaylist } from '@/hooks/useAddPlaylist'
import { useAppSelector, useAppDispatch } from '@/hooks/useStore'
import { selectPlayList } from '@/store/slice/Player'
import { getSizeImage } from '@/utils/format'
import { getSong } from '@/store/slice/Player'
import { PlayCircleOutlined } from '@ant-design/icons'
import { SongItemWrapper } from './style'
const SongItem: React.FC<any> = props => {
  // props/state
  const {
    coverPic,
    // duration,
    singer,
    songId,
    songName,
    className = ''
  } = props
  // redux hook
  const dispatch = useAppDispatch()
  const playList = useAppSelector(selectPlayList).data
  // other function
  const playMusic = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, isTo = false) => {
    if (!isTo) e.preventDefault()
    dispatch(getSong({ id: songId, isPlay: true }))
    // 播放音乐
    // document.getElementById('audio').autoplay = true
  }
  const addPlaylist = useAddPlaylist(playList)

  return (
    <SongItemWrapper className={className} style={{ margin: '20px 0' }}>
      {coverPic && (
        <Link href="/song" className="song-item" onClick={e => playMusic(e, true)}>
          <img src={getSizeImage(coverPic, 50)} alt="" />
        </Link>
      )}
      <div className="song-item song-info">
        <div className="left-info">
          <div className="singer-song">
            <a onClick={e => playMusic(e)} className="text-nowrap">
              {songName}
            </a>
            <br />
            <Link href="/song" className="song-item singer" onClick={e => playMusic(e, true)}>
              {singer}
            </Link>
          </div>
        </div>
        <div className="right-operator">
          <PlayCircleOutlined className="font-active" onClick={e => playMusic(e)} />
          <button className="sprite_icon2 btn addto" onClick={e => addPlaylist(e, songId)}></button>
        </div>
      </div>
    </SongItemWrapper>
  )
}

export default memo(SongItem)
