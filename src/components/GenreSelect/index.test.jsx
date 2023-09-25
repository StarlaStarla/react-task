import { screen, render, act, fireEvent } from '@testing-library/react'
import GenreSelect from '../GenreSelect'

describe('GenreSelect', () => {
  const movies = [
    {
      key: 0,
      type: 3,
      genre: 'Action & Adventure',
      movieName: 'PULP FICTION',
      releaseYear: 2004,
      imageUrl: '/movie1.png',
      rating: 8.9,
      duration: 154,
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    },
    {
      key: 1,
      type: 2,
      genre: 'Drama, Biography, Music',
      movieName: 'Bohemian Rhapsody',
      releaseYear: 2003,
      imageUrl: '/movie2.png',
      rating: 8.9,
      duration: 154,
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    }
  ]
  const movieChange = jest.fn()

  it('component renders all genres passed in props', () => {
    render(<GenreSelect {...{ movies, movieChange }} />)
    const option = screen.getByText('Crime')
    expect(option).toBeInTheDocument()
  })
  it("component highlights genre 'All' by default", () => {
    render(<GenreSelect {...{ movies, movieChange }} />)
    const selectedOption = screen.getByText('All')
    expect(selectedOption.getAttribute('aria-selected')).toEqual('true')
  })
  it('after change genre selection, movies dont belong to that genre should dispear', () => {
    render(<GenreSelect {...{ movies, movieChange }} />)
    const selectedOption = screen.getByText('Documentary')
    act(() => {
      selectedOption.click()
    })
    expect(screen.queryByText('PULP FICTION')).not.toBeInTheDocument()
  })
  it('should trigger movieChange when click on the movie', () => {
    render(<GenreSelect {...{ movies, movieChange }} />)
    const movie = screen.getByText('Bohemian Rhapsody')
    act(() => {
      movie.click()
    })
    expect(movieChange).toHaveBeenCalled()
  })
  it('should trigger movieSort when changes "Sort by" value', () => {
    render(<GenreSelect {...{ movies, movieChange }} />)
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    const title = screen.getByText('Title')
    act(() => {
      title.click()
    })
    expect(title).toBeInTheDocument()
  })
})
