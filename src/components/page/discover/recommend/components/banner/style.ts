import styled from 'styled-components'
export const BannerWrapper = styled.div`
  .banner {
    position: relative;
    display: flex;
    justify-content: center;

    .BannerContent {
      width: 100%;

      .banner-item {
        .image {
          width: 100%;
          height: 283px;
          object-fit: contain;
          overflow: hidden;
        }
      }
    }

    .BannerControl {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      transform: translateY(-31.5px);

      .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        font-size: 30px;
        color: #ffffff;
        cursor: pointer;
        background-color: transparent;

        &:hover {
          background-color: rgb(0 0 0 / 10%);
        }
      }

      .left,
      .right {
        line-height: 63px;
        text-align: center;
      }

      .left {
        left: 0;
      }

      .right {
        right: 0;
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 1000px !important;
  }
`
