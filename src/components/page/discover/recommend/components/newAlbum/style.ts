import styled from 'styled-components'
export const AlbumWrapper = styled.div`
  margin-top: 10px;

  .albumContent {
    display: flex;
    align-items: center;
    height: 186px;
    margin: 20px 0 30px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;

    .arrow {
      width: 30px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }

    .album {
      width: 96%;
      height: 150px;
      padding: 0 30px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`
