import React, { Fragment, memo } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { changeCurrentIndex, changeCurrentTopListId, selectCurrentIndex } from 'src/store/slice/TopList'
import { getSizeImage } from 'src/utils/format'
import { TopListItemWrapper } from './style'
interface Props {
  topListInfo: {
    [key: string]: any
  }
}
const TopListInfo: React.FC<Props> = (props) => {
  const { topListInfo } = props
  const currentIndex = useAppSelector(selectCurrentIndex).data
  const dispatch = useAppDispatch()
  const router = useRouter()
  // other function
  const clickItem = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number, id: any) => {
    e.preventDefault()
    // dispatch
    dispatch(changeCurrentTopListId(id))
    dispatch(changeCurrentIndex(index))
    // 修改URL
    router.push(`/discover/ranking?id=${id}`)
  }
  return (
    <TopListItemWrapper>
      {topListInfo.map((item: any, index: number) => {
        return (
          <Fragment key={item.id}>
            <h3 style={{ marginTop: index === 4 ? '17px' : '' }}>
              {index === 0 ? '云音乐特色榜' : index === 4 ? '全球媒体榜' : ''}
            </h3>
            <a className={`info ${index === currentIndex ? 'bg' : ''}`} onClick={e => clickItem(e, index, item.id)}>
              <div className="image">
                <img src={getSizeImage(item.coverImgUrl, 44)} alt="" />
              </div>
              <div className="info-right">
                <div className="info-title">{item.name}</div>
                <div className="info-update">{item.updateFrequency}</div>
              </div>
            </a>
          </Fragment>
        )
      })}
    </TopListItemWrapper>
  )
}
export default memo(TopListInfo)
