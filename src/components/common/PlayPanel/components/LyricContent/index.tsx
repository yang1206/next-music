import React, { memo, useEffect, useRef } from 'react'
import { useAppSelector } from '@/hooks/useStore'
import { selectLyric, selectCurrentLyricIndex } from '@/store/slice/Player'
import { scrollTo } from '@/utils/scroll'
import { LyricContentWrapper } from './style'
const LyricContent: React.FC<any> = () => {
  const currentLyric = useAppSelector(selectLyric).data
  const currentLyricIndex = useAppSelector(selectCurrentLyricIndex).data
  const panelRef = useRef()
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return
    scrollTo(panelRef.current, currentLyricIndex * 32, 300)
  }, [currentLyricIndex])
  return (
    <LyricContentWrapper ref={panelRef}>
      <div className="lyric-content">
        {currentLyric &&
          currentLyric.map((item, index) => {
            return (
              <div key={index} className={'lyric-item ' + (currentLyricIndex === index ? 'active' : '')}>
                {item.content}
              </div>
            )
          })}
      </div>
    </LyricContentWrapper>
  )
}
export default memo(LyricContent)