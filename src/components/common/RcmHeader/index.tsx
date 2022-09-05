import React, { memo } from 'react'
import Link from 'next/link'
import { RcmHeaderWrapper } from './style'
type Headers = {
  title: string
  keywords?: Array<any>
  moreLink?: string
  right?: any
  keywordClick?: (item: string, index?: number) => void
}
const handleClick = () => {}
const RcmHeader: React.FC<Headers> = props => {
  const { title, keywords, keywordClick, moreLink, right } = props
  return (
    <RcmHeaderWrapper className="sprite_02">
      <div className="left">
        <span className="title">{title}</span>
        <div className="keyword">
          {keywords &&
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className="link" onClick={() => keywordClick(item, index)}>
                    {item}
                  </span>
                  <span className="divider">|</span>
                </div>
              )
            })}
        </div>
      </div>
      <div className="right">
        {moreLink && (
          <Link href={moreLink}>
            <a onClick={handleClick}>更多</a>
          </Link>
        )}
        {right ? right : <i className="icon sprite_02"></i>}
      </div>
    </RcmHeaderWrapper>
  )
}
export default memo(RcmHeader)
