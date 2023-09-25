import GenreSelect from '../components/GenreSelect'

export default {
  title: 'Component/GenreSelect',
  component: GenreSelect,
  argTypes: { movies: { control: 'array' }, movieChange: {} }
}

export const GenreSelectExample = {
  args: {
    movies: [
      {
        key: 0,
        type: 1,
        genre: 'Action & Adventure',
        movieName: 'PULP FICTION',
        releaseYear: 2004,
        imageUrl: '/movie1.png',
        rating: 8.9,
        duration: 154,
        description:
          'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
      }
    ],
    movieChange: () => {}
  }
}
