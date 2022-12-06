import React, { memo } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { changeCurrentCategory, getPlayList, selectCategory } from 'src/store/slice/SongList'
import { CategoryWrapper } from './style'
const SongsCategory: React.FC = () => {
  const category = useAppSelector(selectCategory).data
  const dispatch = useAppDispatch()
  function changeCategory(name: string) {
    dispatch(changeCurrentCategory(name))
    dispatch(getPlayList(0))
  }
  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={() => changeCategory('全部')}>
          全部风格
        </span>
      </div>
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl key={item.name} className={`item${index}`}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((sItem) => {
                  return (
                    <div className="item" key={sItem.name}>
                      <span className="link" onClick={() => changeCategory(sItem.name)}>
                        {sItem.name}
                      </span>
                      <span className="divider">|</span>
                    </div>
                  )
                })}
              </dd>
            </dl>
          )
        })}
      </div>
    </CategoryWrapper>
  )
}
export default memo(SongsCategory)
