import styled from 'styled-components'
export const SingerItemWrapper = styled.div`
  width: 130px;
  height: 154px;
  padding: 0 0 30px;
  margin-right: 62px;
  margin-bottom: 30px;
  overflow: hidden;
  line-height: 1.4;

  &:nth-child(5n) {
    margin-right: 0;
  }

  .cover-pic {
    position: relative;
    width: 130px;
    height: 130px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image_cover {
      background-position: 0 -680px;
    }
  }

  .singer-info {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;

    .singer_icon {
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }
  }
`
