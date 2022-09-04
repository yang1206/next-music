import styled from 'styled-components'
export const DateWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 34px 0 0 54px;
  background-position: 0 -270px;

  .head {
    height: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 26px;
    color: #fed9d9;
    text-align: center;
    text-shadow: 0 -1px #962626;
    text-size-adjust: none;
  }

  .day {
    display: block;
    font-size: 74px;
    font-weight: bold;
    line-height: 80px;
    color: #202020;
    text-align: center;
  }

  .mask {
    position: absolute;
    top: 26px;
    left: 0;
    width: 142px;
    height: 107px;
    background-position: 0 -400px;
  }
`
