import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSongCategory, getSongCategoryList, getSongListDetail } from 'src/api/songlist'
import { handleSongsCategory } from 'src/utils/handledata'
import type { RootState } from 'src/store'
// 歌单详情
const getSongListDetailData = createAsyncThunk('songList/getSongListData', async (id: string) => {
  const data = await getSongListDetail({ id }).then((res) => {
    return res
  })
  return data
})

// 歌单分类
const getCategory = createAsyncThunk('songList/getCategory', async () => {
  const data = await getSongCategory().then((res) => {
    const categoryData = handleSongsCategory(res)
    return categoryData
  })
  return data
})

const getPlayList = createAsyncThunk<
  any,
  number,
  {
    state: RootState
  }
>('songList/getPlayList', async (page, { getState }) => {
  const name = getState().songList.currentCategory
  const data = await getSongCategoryList(name, page * 35).then((res) => {
    return res
  })
  return data
})
export { getSongListDetailData, getCategory, getPlayList }
