import styled from 'styled-components'
export const DropdownWrapper = styled.div`
  /* icons */

  /* 下拉框 */

  .down-slider {
    position: absolute;
    top: 36px;
    right: 0;
    left: 0;
    z-index: 999;
    width: 237px;
    text-shadow: 0 1px 0 rgb(255 255 255 / 90%);
    background: #ffffff;

    /* height: 144px; */
    border: 1px solid #bebebe;
    border-radius: 4px;
    box-shadow: 0 4px 7px #555555;

    .search-header {
      height: 35px;

      .discover {
        display: inline-block;
        padding-top: 10px;
        padding-left: 10px;
      }
    }

    .logout {
      background-color: skyblue;
    }
  }

  .profile-img {
    width: 35px;
    height: auto;
    border-radius: 50%;
  }
`
