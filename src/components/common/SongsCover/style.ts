import styled from 'styled-components'
export const SongCoverWrapper = styled.div`
  width: 140px;
  margin: 15px;

  .cover-top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 27px;
        padding: 0 10px;
        color: #cccccc;
        background-position: 0 -537px;

        .ej {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin-right: 5px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .cover-bottom {
    margin-top: 10px;
    font-size: 14px;
    color: #000000;
  }

  .cover-source {
    color: #666666;
  }
`
