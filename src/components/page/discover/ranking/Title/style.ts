import styled from 'styled-components'
import sprite_button from 'public/img/sprite_button.png'
export const TopListTitleWrapper = styled.div`
  display: flex;
  padding: 40px;

  .title-image {
    position: relative;
    padding: 3px;
    border: 1px solid #cccccc;

    .msk {
      top: 3px;
      left: 3px;
      width: 150px;
      height: 150px;
      background-position: -230px -380px;
    }
  }

  .title-info {
    padding: 16px 0 3px;
    margin-left: 35px;

    .update-info {
      margin: 0 0 20px;
      line-height: 35px;

      .timer {
        margin-right: 5px;
        font-size: 15px;
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
  }
`
