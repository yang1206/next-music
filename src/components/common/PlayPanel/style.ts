import styled from 'styled-components'
import playlist_bg from 'public/img/playlist_bg.png'
export const PanelWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: -445%;
  width: 986px;
  height: 301px;

  /* transform: translateX(-50%); */
  cursor: default;
  border-radius: 7px;

  .SliderPlaylistHeader {
    display: flex;
    height: 40px;
    background: url(${playlist_bg.src});
    background-position: 0 0;

    .playlist-header-left {
      display: flex;
      justify-content: space-between;
      width: 553px;
      padding: 0 10px 0 15px;
      line-height: 39px;

      .header-title {
        font-size: 14px;
        font-weight: bold;
        color: #e2e2e2;
      }

      .header-icon {
        padding: 5px;
        line-height: 33px;
        color: #cccccc;

        span {
          margin-left: 5px;
        }
      }
    }

    .playlist-header-right {
      display: flex;
      align-items: center;
      width: 432px;
      line-height: 40px;
      color: #ffffff;
      text-align: center;

      .song-name {
        width: 94%;
        text-align: center;
      }

      .close-window {
        width: 5%;
        cursor: pointer;
      }
    }
  }

  .SliderPlaylistMain {
    display: flex;
    height: 260px;
    background: url(${playlist_bg.src});
    background-repeat: repeat-y;
    background-position: -1014px 0;

    .main-playlist {
      width: 555px;
      padding-left: 2px;
      overflow: auto;
      color: #ffffff;

      /* 滚动条 */

      ::-webkit-scrollbar-thumb:horizontal {
        /* 水平滚动条的样式 */
        width: 4px;
        background-color: #9f9f9f;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-track-piece {
        background-color: #1a1a1a; /* 滚动条的背景颜色 */
        border-radius: 0; /* 滚动条的圆角宽度 */
      }

      ::-webkit-scrollbar {
        width: 8px; /* 滚动条的宽度 */
        height: 6px; /* 滚动条的高度 */
      }

      ::-webkit-scrollbar-thumb:vertical {
        /* 垂直滚动条的样式 */
        height: 50px;
        background-color: #9f9f9f;

        /* outline: 2px solid #000; */

        /* outline-offset: -2px; */
        border: 2px solid #9f9f9f;
        border-radius: 4px;
      }

      .active {
        background-color: rgb(0 0 0 / 40%);
      }
    }

    .main-line {
      width: 6px;
      height: 258px;
      margin-top: 2px;
      background: #000000;
    }

    .main-lyric {
      position: relative;
      width: 423px;
      height: 100%;
      padding: 12px 22px 7px;
      overflow-x: auto;

      /* 滚动条 */

      ::-webkit-scrollbar-thumb:horizontal {
        /* 水平滚动条的样式 */
        width: 4px;
        background-color: #9f9f9f;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-track-piece {
        background-color: #1a1a1a; /* 滚动条的背景颜色 */
        border-radius: 0; /* 滚动条的圆角宽度 */
      }

      ::-webkit-scrollbar {
        width: 8px; /* 滚动条的宽度 */
        height: 6px; /* 滚动条的高度 */
      }

      ::-webkit-scrollbar-thumb:vertical {
        /* 垂直滚动条的样式 */
        height: 50px;
        background-color: #9f9f9f;

        /* outline: 2px solid #000; */

        /* outline-offset: -2px; */
        border: 2px solid #9f9f9f;
        border-radius: 4px;
      }

      .lyric-item {
        height: auto !important;
        line-height: 32px;
        color: #989898;
        transition: color 0.7s linear;

        /* position: relative; */

        /* transition: all 1s;+ */

        &.active {
          /* top: 12px; */
          color: #ffffff;
        }
      }

      .lyric-content {
        position: absolute;
        top: 20px;
        right: 0;
        left: 0;
      }
    }
  }
`
