import styled from 'styled-components'
import recommend_cover from 'public/img/recommend-cover.jpg'
export const DayRecommendContent = styled.div`
  height: auto;

  .recommend-cover-bg {
    width: 900px;
    height: 179px;
    margin: 20px auto;
    overflow: hidden;
    background: url(${recommend_cover.src}) no-repeat;
    background-size: cover;
  }

  .main {
    padding: 0 30px;
    margin-top: 45px;
  }
`
