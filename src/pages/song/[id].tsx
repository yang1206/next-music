import React, { useEffect, useState } from 'react'
import { getHotComment, selectSong } from 'src/store/slice/Player'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { formatMinuteSecond } from 'src/utils/format'
import { getSongSimi } from 'src/api/song'
import SongInfo from 'src/components/page/song/components/SongInfo'
import SongItem from 'src/components/page/song/components/SongItem'
import SongComments from 'src/components/page/song/components/SongComments'
import { PlayerWrapper } from 'src/styles/page/song'

const Player: React.FC = () => {
  const dispatch = useAppDispatch()
  const [simiList, setSimiList] = useState([])
  const currentSong = useAppSelector(selectSong).data
  useEffect(() => {
    // 获取热评
    dispatch(getHotComment(currentSong.id))
    // 获取相似推荐歌曲
    getSongSimi({ id: currentSong.id }).then((res) => {
      setSimiList(res.songs)
    })
  }, [currentSong, dispatch])
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <div className="PlayerLeft">
          <SongInfo />
          <SongComments />
        </div>
        <div className="PlayerRight">
          {simiList
            && simiList.map((item) => {
              return (
                <SongItem
                  key={item.id}
                  className="song_item"
                  // coverPic={index < 3?item.al.picUrl:''}
                  duration={formatMinuteSecond(item.dt)}
                  songName={item.name}
                  singer={item.artists[0].name}
                  songId={item.id}
                />
              )
            })}
        </div>
      </div>
    </PlayerWrapper>
  )
}

export default Player
