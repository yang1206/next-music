import styled from 'styled-components'
export const ProfileWrapper = styled.div`
  padding: 40px;

  .gap {
    margin-right: 5px;
  }

  .user-info {
    .user-pic {
      margin-right: 40px;

      img {
        padding: 3px;
        background: #ffffff;
        border: 1px solid #d5d5d5;
      }
    }

    .user-detail {
      width: 100%;
      height: 52px;
      padding-top: 10px;
      padding-bottom: 12px;
      margin-bottom: 10px;
      border-bottom: 1px solid #dddddd;

      .nickname-wrap {
        display: flex;

        .nickname {
          font-size: 22px;
          font-weight: normal;
          line-height: 30px;
        }

        .lev {
          display: flex;
          display: inline-block;
          height: 19px;
          padding: 0 5px;
          margin: 3px 5px 0 10px;
          overflow: hidden;
          font-size: 14px;
          font-style: italic;
          font-weight: bold;
          line-height: 21px;
          color: #e03a24;
          vertical-align: middle;
          background-position: -135px -190px;
        }

        .gender-icon {
          font-size: 16px;
          color: #e60026;

          &.man {
            color: #26a6e4;
          }
        }
      }

      .dynamic-wrap {
        margin-top: 18px;

        .dynamic-item {
          padding: 0 40px 0 20px;

          .count {
            display: block;
            margin-top: -4px;
            font-size: 24px;
            font-weight: normal;
            cursor: pointer;
          }

          span {
            display: block;
            text-indent: 2px;
            cursor: pointer;
          }
        }
      }

      .recommend {
        margin: 15px 0;
      }
    }
  }

  .song-list {
    height: auto;
    margin-top: 25px;

    .playlist {
      flex-wrap: wrap;
      justify-content: center;

      a {
        margin-right: 38px;
      }
    }

    .creator {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
