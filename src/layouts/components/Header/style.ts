import styled from 'styled-components'
export const HeaderWrapper = styled.div`
position: relative;
  top: 0;
  right: 0;
  left: 0;
  height: 75px;
  background-color: #242424;

  .content {
    display: flex;
    justify-content: space-evenly;
    width: 1100px;
    height: 70px;
    margin: 0 auto;

    .HeaderLeft {
      display: flex;

      .logo {
        width: 176px;
        height: 69px;
        text-indent: -9999px;
        background-position: 0 0;
      }

      .select-list {
        display: flex;
        flex-wrap: nowrap;
        font-size: 14px;
        line-height: 70px;
        text-align: center;
        white-space: nowrap;

        .select-item {
          position: relative;

          a {
            display: block;
            padding: 0 20px;
            color: #cccccc;
          }

          &:last-of-type {
            position: relative;

            ::after {
              position: absolute;
              top: 20px;
              right: -15px;
              width: 28px;
              height: 19px;
              content: '';
              background-image: url(${require('../../../../public/img/sprite_01.png')});
              background-position: -190px 0;
            }
          }

          & a:hover,
          .active {
            color: #ffffff;
            text-decoration: none;
            background-color: #000000;
          }

          .active .icon {
            position: absolute;
            bottom: -1px;
            left: 50%;
            display: inline-block;
            width: 12px;
            height: 7px;
            background-position: -226px 0;
            transform: translate(-50%, 0);
          }
        }
      }
    }

    .HeaderRight {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #cccccc;

      .search {
        width: 221px;
        height: 32px;
        border-radius: 16px;

        input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }

      .center {
        width: 90px;
        height: 32px;
        margin: 0 16px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666666;
        border-radius: 16px;
      }
    }
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
}
@media screen and (max-width: 900px) {
  .HeaderWrapper {
    width: 1000px !important;
  }
}
@media screen and (max-width: 1200px) {
  .content {
    justify-content: flex-start !important;
    width: 100% !important;
  }

  .select-item:nth-of-type(6) {
    display: none !important;
  }`
