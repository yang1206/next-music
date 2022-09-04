import styled from 'styled-components'
import sprite_icon2 from 'public/img/sprite_icon2.png'
export const SongListDetailWrapper = styled.div`
  width: 100%;
  padding: 47px 30px 40px 39px;

  .gap {
    margin-top: 15px;
  }

  .HeaderTitle {
    .conver-img {
      position: relative;

      span {
        position: absolute;
        top: -4px;
        left: -4px;
        width: 208px;
        height: 208px;
        background-position: 0 -1285px;
      }
    }

    .song-detail {
      margin-left: 30px;
      font-size: 14px;

      .detail-title-wrapper {
        display: flex;

        .icons {
          width: 54px;
          height: 24px;
          margin-right: 12px;
          background-image: url(${sprite_icon2.src});
          background-position: 0 -243px;
        }

        .detail-title {
          font-size: 20px;
          line-height: 24px;
        }
      }

      .avatar {
        display: flex;
        margin-top: 18px;
        line-height: 35px;

        .avatar-name {
          margin: 0 15px;
        }
      }

      .label-warpper {
        line-height: 35px;

        > span {
          height: 30px;
          margin-right: 10px;
          line-height: 30px;
        }
      }

      .description-info {
        .description-details {
          summary {
            display: -webkit-box;
            overflow: hidden;
            word-break: break-all;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }

    .MainDetail {
      margin-top: 25px;
    }
  }
`
