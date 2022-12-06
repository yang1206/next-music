import { memo } from 'react'
import Link from 'next/link'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { useAddPlaylist } from 'src/hooks/useAddPlaylist'
import { getSong, selectPlayList } from 'src/store/slice/Player'
import { SingleSongItemWrapper } from './style'

interface Props {
  songId: number
  songName: string
  singer: string
  album: string
  duration: string
}

const SingleSong: React.FC<Props> = ({ songId, songName, singer, album, duration }: Props) => {
  const dispatch = useAppDispatch()
  const playList = useAppSelector(selectPlayList).data
  // 播放音乐
  const playMusic = () => {
    dispatch(getSong({ id: songId, isPlay: true }))
  }
  const addPlaylist = useAddPlaylist(playList)
  return (
    <SingleSongItemWrapper>
      <div className="song-name">
        <PlayCircleOutlined onClick={() => playMusic()} />
        <em onClick={() => playMusic()}>{songName}</em>
        <button className="sprite_icon2 btn addto" onClick={e => addPlaylist(e, songId)}></button>
      </div>
      <Link href="/discover/song" className="singer" onClick={() => playMusic()}>
        {singer}
      </Link>
      <div className="text-nowrap album">《{album}》</div>
      <div className="text-nowrap duration">{duration}</div>
    </SingleSongItemWrapper>
  )
}

export default memo(SingleSong)
