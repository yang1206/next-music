import styled from 'styled-components'
import progress_bar from 'public/img/progress_bar.png'
import sprite_icon from 'public/img/sprite_icon.png'
import playbar_sprite from 'public/img/playbar_sprite.png'
export const PlayerBarWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 53px;
  zoom: 1;
  background: #252424;
  background-repeat: repeat;
  background-position: 0 0;
  border-radius: 5px 5px 0 0;
  opacity: 0.95;

  .player-content {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    transform: translateX(-50%);

    /* 进入 */
    .playlist-enter,
    .playlist-appear {
      opacity: 0;
      transform: scale(0.6);
    }

    /* 执行动画 */
    .playlist-enter-active,
    .playlist-appear-active {
      opacity: 1;
      transition: opacity 300ms, transform 300ms;
      transform: scale(1);
    }

    /* 离开 */
    .playlist-exit {
      opacity: 1;
      transform: scale(1);
    }
    .playlist-exit-active {
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
      transform: scale(0.6);
    }
    .playlist-exit-done {
      opacity: 0;
    }
    .Control {
      display: flex;
      align-items: center;

      .prev,
      .next {
        width: 28px;
        height: 28px;
        cursor: pointer;
      }

      .prev {
        background-position: 0 -130px;

        &.prev:hover {
          background-position: -30px -130px !important;
        }
      }

      .play {
        width: 36px;
        height: 36px;
        margin: 0 8px;
        cursor: pointer;
        background-position: 0 -204px;

        &.play:hover {
          background-position: -40px -204px !important;
        }
      }

      .pause {
        width: 36px;
        height: 36px;
        margin: 0 8px;
        cursor: pointer;
        background-position: 0 -165px;

        &.pause:hover {
          background-position: -40px -165px !important;
        }
      }

      .next {
        background-position: -80px -130px;

        &.next:hover {
          background-position: -110px -130px !important;
        }
      }
    }

    .PlayInfo {
      display: flex;
      align-items: center;
      width: 642px;

      .image {
        width: 34px;
        height: 34px;
        border-radius: 5px;
        cursor: pointer;
      }

      .info {
        flex: 1;
        margin-left: 10px;
        color: #a1a1a1;

        .song {
          position: relative;
          top: 8px;
          left: 8px;
          color: #e1e1e1;

          .singer-name {
            margin-left: 10px;
            color: #a1a1a1;
          }
        }

        .progress {
          display: flex;
          align-items: center;
          margin-bottom: 5px;

          .ant-slider {
            width: 493px;
            margin-right: 10px;

            .ant-slider-rail {
              height: 9px;
              background: url(${progress_bar.src}) right 0;
            }

            .ant-slider-track {
              height: 9px;
              background: url(${progress_bar.src}) left -66px;
            }

            .ant-slider-handle {
              width: 22px;
              height: 24px;
              margin-top: -7px;
              background: url(${sprite_icon.src}) 0 -250px;
              border: none;
            }
          }

          .time {
            .now-time {
              color: #e1e1e1;
            }

            .divider {
              margin: 0 3px;
            }
          }
        }
      }
    }

    .Operator {
      position: relative;
      display: flex;
      flex-wrap: nowrap;

      .left {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
      }
      .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
      }
      .lyrics {
        margin-right: 3px;
      }
      .favor {
        background-position: -88px -163px;

        &.favor:hover {
          background-position: -88px -189px !important;
        }
      }

      .share {
        background-position: -114px -163px;

        &.share:hover {
          background-position: -114px -189px !important;
        }
      }

      .right {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;

        .volume {
          background-position: -2px -248px;

          &.volume:hover {
            background-position: -31px -248px !important;
          }
        }

        .loop {
          background-position: -3px -344px;

          &.loop:hover {
            background-position: -33px -344px !important;
          }
        }

        .shuffle {
          background-position: -66px -248px;

          &.shuffle:hover {
            background-position: -93px -248px !important;
          }
        }

        .one {
          background-position: -66px -344px;

          &.one:hover {
            background-position: -93px -344px !important;
          }
        }

        .playlist {
          width: 59px;
          padding-left: 18px;
          color: #cccccc;
          text-align: center;
          background-position: -42px -68px;

          &.playlist:hover {
            background-position: -42px -98px !important;
          }
        }
      }
      .top-volume {
        position: absolute;
        top: -131px;
        left: 60px;
        width: 32px;
        height: 113px;
        padding: 10px;
        overflow: hidden;
        clear: both;
        background-position: 0 -503px;

        /* ant design Slider style change */
        .ant-slider-vertical {
          margin: 0;
          .ant-slider-rail {
            background-color: transparent;
          }
          .ant-slider-track {
            background: url(${playbar_sprite.src}) no-repeat 0 9999px;
            background-position: -40px bottom;
          }
          .ant-slider-handle {
            background: url(${sprite_icon.src})
            background-position: -42px -250px;
            border: 0;
          }
        }
      }
    }
  }
`
