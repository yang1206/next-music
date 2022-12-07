import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Input, Tabs } from 'antd'
// import { wrapper } from '@/store'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import {
  getSearchAlbumList,
  getSearchSingerList,
  getSearchSongList,
  selectAlbumList,
  selectSingerList,
  selectSingleSongList,
} from 'src/store/slice/Search'
import SingleSong from 'src/components/page/search/SingleSong'
import ArtistCover from 'src/components/common/ArtistCover'
import AlbumCover from 'src/components/common/AlbumCover'
import { formatMinuteSecond } from 'src/utils/format'
import { SearchWrapper } from 'src/styles/page/search'
const SearchContent: React.FC = () => {
  const [activeKey, setActive] = useState<string>()
  const [searchValue, setSearchValue] = useState<string>()
  const { Search } = Input
  // redux
  const singleSongList = useAppSelector(selectSingleSongList).data
  const singerList = useAppSelector(selectSingerList).data
  const albumList = useAppSelector(selectAlbumList).data
  const dispatch = useAppDispatch()
  // 从路由search中取出参数
  const router = useRouter()
  const { song, type }: any = router.query
  useEffect(() => {
    setSearchValue(song)
    // 从useEffect中检测参数，调用不同的搜索事件
    // 1代表搜索歌曲，2代表搜索歌手 3代表专辑
    if (song && type === '1')
      dispatch(getSearchSongList({ keywords: song, type }))
    if (song && type === '2')
      dispatch(getSearchSingerList(song))
    if (song && type === '3')
      dispatch(getSearchAlbumList(song))
  }, [dispatch, song, router, type])
  const redirect = (val: string, type: string | number) => {
    if (type !== undefined)
      router.push(`/search?song=${val}&type=${type}`)

    else
      router.push(`/search?song=${val}&type=1`)
  }
  // 搜索事件
  const searchEnter = (val: string) => {
    // 跳转路由，目的是传参数
    redirect(val, activeKey)
  }
  const onChange = (val: string) => {
    setActive(val)
    redirect(song, val)
  }
  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target!.value)
  }
  const CoverProps = {
    width: '118px',
    size: '100px',
    bgp: '-570px',
  }
  const items = [
    {
      label: '单曲',
      key: '1',
      children: (
        <div className="SingleSongWrapper">
          {singleSongList
            && singleSongList.map((item) => {
              return (
                <SingleSong
                  key={item.id}
                  songId={item.id}
                  songName={item.name}
                  singer={item?.ar[0]?.name}
                  album={item.al.name}
                  duration={formatMinuteSecond(item.dt)}
                />
              )
            })}
        </div>),
    },
    {
      label: '歌手',
      key: '2',
      children: (
        <div className="SingerWrapper">
          {singerList
            && singerList.map((item) => {
              return <ArtistCover key={item.id} id={item.id} coverPic={item.picUrl} singer={item.name} />
            })}
        </div>),
    },
    {
      label: '专辑',
      key: '3',
      children: (
        <div className="SearchAlbum">
          {albumList
            && albumList.map((info) => {
              return (
                <div key={info.id} className="albumItem">
                  <AlbumCover info={info} {...CoverProps} />
                </div>
              )
            })}
        </div>),
    },
  ]
  return (
    <SearchWrapper>
      <div className="wrap-v2 content">
        <div className="search-wrapper">
          <Search value={searchValue} onChange={e => changeEvent(e)} onSearch={val => searchEnter(val)} style={{ width: 490 }} />
        </div>
        <div className="search-content">
          <div className="search-info">
            <span>搜索{song}, 找到</span>
            <span className="music-amount"> 20 </span>
            {activeKey === '1' && '单曲'}
            {activeKey === '2' && '歌手'}
            {activeKey === '3' && '专辑'}
          </div>
          <div className="card-container">
            <Tabs items={items} destroyInactiveTabPane={true} onChange={onChange} type="card">
            </Tabs>
          </div>
        </div>
      </div>
    </SearchWrapper>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
//   const { song, type }: any = query
//   await store.dispatch(getSearchSongList({ keywords: song, type }))
//   // eslint-disable-next-line no-console
//   console.log('State on server', store.getState())

//   return {
//     props: {
//       song, type,
//     },
//   }
// })
export default (SearchContent)
