import styled from 'styled-components'
export const TopRankingWrapper = styled.div`
  flex: 1;

  .header {
    display: flex;
    height: 100px;
    margin: 20px 0 0 20px;

    .image {
      position: relative;
      width: 80px;
      height: 80px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        font-weight: 700;
        color: #333333;
      }

      .btn {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        text-indent: -9999px;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }

  .list {
    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      &.list-item:nth-child(-n + 3) {
        .rank {
          color: #c10d0c;
        }
      }

      .rank {
        width: 35px;
        margin-left: 10px;
        font-size: 16px;
        text-align: center;
      }

      .info {
        display: flex;
        justify-content: space-between;
        width: 170px;
        height: 17px;
        line-height: 17px;
        color: #000000;

        .name {
          flex: 1;
        }

        .operate {
          display: flex;
          display: none;
          align-items: center;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 32px;
    margin-right: 32px;

    a {
      color: #000000;
    }
  }
`
