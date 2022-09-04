import styled from 'styled-components'
export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 0 auto;
  overflow: hidden;
  line-height: 30px;
  background-color: #c20c0c;

  .TopMenu {
    position: relative;
    top: -4px;
    display: flex;
    flex-wrap: nowrap;
    padding-left: 162px;
    font-size: 12px;
    white-space: nowrap;

    .item {
      a {
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        line-height: 20px;
        color: #ffffff;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .TopMenu {
      padding-left: 172px !important;
    }
  }
  @media screen and (max-width: 900px) {
    width: 1000px !important;

    .TopMenu {
      padding-left: 170px !important;
    }
  }
`
