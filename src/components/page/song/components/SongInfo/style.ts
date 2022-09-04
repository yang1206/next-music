import styled from 'styled-components'
import sprite_button from 'public/img/sprite_button.png'
export const SongInfoWrapper = styled.div`
  display: flex;

  .album {
    position: relative;
    width: 206px;

    img {
      margin: 34px;
    }

    .image_cover {
      top: -4px;
      left: -4px;
      height: 215px;
      background-position: -140px -580px;
    }
  }

  .song-detail-wrapper {
    width: 414px;
    margin-left: 20px;

    .song-title,
    .singer,
    .controls,
    .settle-album {
      display: flex;
      align-items: center;
    }

    .singer > span,
    .settle-album > span {
      color: #999999;
    }

    .singer > a,
    .settle-album > a {
      color: #0c73c2;
      cursor: pointer;
    }

    .song-title {
      height: 32px;
      line-height: 32px;

      .single-song {
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }

      .song-name {
        margin: 0 15px 0 11px;
        overflow: hidden;
        font-size: 24px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mv {
        width: 21px;
        height: 18px;
        background-position: 0 -18px;
      }
    }

    .singer,
    .settle-album {
      margin: 10px 0;
    }

    .controls {
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

    .lyric-item {
      margin: 9px 0;
      color: #333333;
      text-align: center;

      &:last-child,
      &:first-child {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
`
