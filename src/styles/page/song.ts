import styled from 'styled-components'
import wrap_bg from 'public/img/wrap_bg.png'
export const PlayerWrapper = styled.div`
  .content {
    display: flex;
    padding-top: 20px;
    background: url(${wrap_bg.src}) repeat-y;
    background-color: #ffffff;

    .PlayerLeft {
      padding: 10px 50px;
      margin: 0 auto;
    }

    .PlayerRight {
      width: 270px;
      padding: 20px 40px 40px 30px;
    }
  }
`
