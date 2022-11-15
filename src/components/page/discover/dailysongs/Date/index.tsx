import React from 'react'
import { DateWrapper } from './style'
import { parseTime } from '@/utils/format'
const DateHeader: React.FC = () => {
  const day = parseTime(new Date(), '{d}')
  const week = `星期${'日一二三四五六'.charAt(new Date().getDay())}`
  return (
    <DateWrapper className="date">
      <div className="head">{week}</div>
      <div className="day">{day}</div>
      <div className="mask date"></div>
    </DateWrapper>
  )
}
export default DateHeader
