import styled from 'styled-components'
import sprite_button from 'public/img/sprite_button.png'
export const AlbumDetailWrapper = styled.div`
  width: 100%;
  padding: 0 30px 40px 39px;

  .gap {
    margin-top: 15px;
  }

  .AlbumTitleWrapper {
    display: flex;
    padding: 40px;

    .title-image {
      position: relative;
      padding: 3px;

      .msk {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 209px;
        height: 177px;
        background-position: 0 -986px;
      }
    }

    .title-info {
      padding: 0 0 3px;
      margin-left: 100px;

      .info {
        margin: 0 0 5px;

        .timer {
          margin-right: 5px;
          font-size: 15px;
        }

        .artist {
          color: #0c73c2;
        }
      }

      .controls {
        display: flex;
        margin-right: -10px;
        margin-bottom: 25px;

        .play {
          position: relative;
          width: 66px;
          height: 31px;
          padding: 0 5px 0 0;
          margin-right: 35px;
          line-height: 31px;
          color: #ffffff;
          cursor: pointer;
          background-position: right -428px;

          .play-icon {
            width: 20px;
            height: 18px;
            margin: 6px 2px 2px 0;
            overflow: hidden;
            background-position: 0 -1622px;
          }

          &::after {
            position: absolute;
            top: 0;
            right: -29px;
            bottom: 0;
            width: 31px;
            content: '';
            background: url(${sprite_button.src}) 0 9999px;
            background-position: 0 -1588px;
          }
        }

        .inner {
          display: flex;
          width: 100%;
          height: 31px;
          padding: 0 7px 0 8px;
          line-height: 31px;
          background-position: 0 -387px;
        }

        .favorite,
        .share,
        .download,
        .comment {
          padding: 0 5px 0 0;
          margin-right: 6px;
          background-position: right -1020px;
        }

        .favorite > .inner,
        .share > .inner,
        .download > .inner,
        .comment > .inner {
          padding-right: 2px;
          padding-left: 28px;
        }

        .favorite {
          background-position: right -1020px;

          .inner {
            background-position: 0 -977px;
          }
        }

        .share {
          .inner {
            background-position: 0 -1225px;
          }
        }

        .download {
          .inner {
            background-position: 0 -2761px;
          }
        }

        .comment {
          .inner {
            background-position: 0 -1465px;
          }
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
  }
`
