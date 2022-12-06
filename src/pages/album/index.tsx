import NavBar from '@/components/common/NavBar'
// import { getAlbumDetail } from '@/api/album'
import AlbumInfo from '@/components/page/album/AlbumInfo'
import { AlbumDetailWrapper } from '@/styles/page/album'

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`https://halocn.top/album?id=${id}`)
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Album({ data }) {
  return (
    <>
      <NavBar />
      <AlbumDetailWrapper>
        <div className="AlbumDetailContent">
          <AlbumInfo albumDetail={data} />
        </div>
      </AlbumDetailWrapper>
    </>)
}
