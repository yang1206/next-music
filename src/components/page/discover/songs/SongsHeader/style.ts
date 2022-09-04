import styled from 'styled-components'
export const SongsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom: 2px solid #c20c0c;

  .SongsHeaderLeft {
    position: relative;
    display: flex;
    align-items: center;

    .title {
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      font-size: 24px;
    }

    .select {
      position: relative;
      top: 2px;
      width: 91px;
      height: 31px;
      margin-left: 10px;
      line-height: 31px;
      color: #0c73c2;
      cursor: pointer;
      background-color: #fafafa;
      border: 1px solid #d3d3d3;
      border-radius: 3px;

      &:hover {
        background-color: #ffffff;
      }

      i {
        position: relative;
        bottom: 2px;
        left: 5px;
        display: inline-block;
        width: 8px;
        height: 5px;
        background-position: -70px -543px;
      }
    }

    .show {
      /* display: block !important; */
    }

    .category {
      display: block;

      .cover {
        position: fixed;
        top: 105px;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgb(0 0 0 / 5%);
      }
    }
  }

  .SongsHeaderRight {
    .hot {
      width: 46px;
      height: 29px;
      color: #ffffff;
      background-color: #c20c0c;
      border: 1px solid #aaaaaa;
      border-radius: 3px;
    }
  }
`
