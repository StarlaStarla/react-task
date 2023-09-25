import './index.scss'

export default function MovieTile(props) {
  const { id, imageUrl, movieName, releaseYear, genre, movieChange } = props
  return (
    <div className='movie-content' onClick={movieChange(id)}>
      <img src={imageUrl} alt={movieName}></img>
      <div className='movie-info'>
        <div className='movie-name'>{movieName}</div>
        <div className='release-year'>{releaseYear}</div>
      </div>
      <div className='genre'>{genre}</div>
    </div>
  )
}
