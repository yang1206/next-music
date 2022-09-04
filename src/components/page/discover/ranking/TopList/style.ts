import styled from 'styled-components'
export const TopListItemWrapper = styled.div`
  h3 {
    padding: 0 10px 6px 15px;
    font-family: '宋体';
    font-size: 14px;
    font-weight: bold;
    color: #000000;
  }

  .info {
    display: flex;
    height: 62px;
    padding: 10px 0 10px 20px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #f4f2f2;
    }

    &.bg {
      background-color: #e6e6e6;
    }

    .info-right {
      margin-left: 10px;

      .info-title {
        width: 150px;
        margin-top: 2px;
        margin-bottom: 8px;
        overflow: hidden;
        color: #000000;
      }

      .info-update {
        color: #999999;
      }
    }
  
`
