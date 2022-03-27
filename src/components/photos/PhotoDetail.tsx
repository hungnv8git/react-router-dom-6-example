import { useParams } from 'react-router-dom'
import { Header } from '../../layouts/Header'

export function PhotoDetail() {
  const { photoId } = useParams()

  return (
    <>
      <Header />
      <h1>this is photo: {photoId}</h1>
    </>
  )
}
