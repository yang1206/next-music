import React, { memo } from 'react'
import { useAppSelector } from 'src/hooks/useStore'
import { selectCurrentTotal } from 'src/store/slice/Player'
import { CommentsHeaderWrapper } from './style'
interface Props {
  title: string
}
const CommentsHeader: React.FC<Props> = (props: { title: any }) => {
  const { title } = props

  const commentTotal = useAppSelector(selectCurrentTotal).data

  return (
    <CommentsHeaderWrapper>
      <div className="CommentsHeaderLeft">
        <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
        <span style={{ marginLeft: '10px' }}>{commentTotal && <span>共{commentTotal}条评论</span>}</span>
      </div>
    </CommentsHeaderWrapper>
  )
}
export default memo(CommentsHeader)
