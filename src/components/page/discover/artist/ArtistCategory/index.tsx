import React, { memo } from 'react'
import Link from 'next/link'
import { ArtistCategoryWrapper } from './style'
import { singerCategories } from '@/common/localData'
const ArtistCategory: React.FC = () => {
  return (
    <ArtistCategoryWrapper>
      {singerCategories.map((item, index) => {
        return (
          <div key={index} className="category">
            <p className="label">{item.title}</p>
            <div className="info artist">
              {item.artists.map((j: { name: string; url: string }, k: number) => {
                return (
                  <span className="categoryItem" key={k}>
                    <Link href={j.url}>
                      {j.name}
                    </Link>
                  </span>
                )
              })}
            </div>
          </div>
        )
      })}
    </ArtistCategoryWrapper>
  )
}
export default memo(ArtistCategory)
