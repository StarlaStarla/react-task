import styles from './index.module.scss'

export default function MovieDetails(props) {
  const { imageUrl, movieName, releaseYear, genre, rating, duration, description } = props
  const durationInHour = Math.floor(duration / 60) + 'h' + (duration % 60) + 'min'
  return (
    <div className={styles.selectedBox}>
      <div>
        <img src={imageUrl} alt={movieName}></img>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.movieInfo}>
          <span className={styles.movieName}>{movieName}</span>
          <span className={styles.rating}>{rating}</span>
        </div>
        <div className={styles.genre}>{genre}</div>
        <div className={styles.extraInfo}>
          <span>{releaseYear}</span>
          <span>{durationInHour}</span>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}
