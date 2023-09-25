import { fireEvent, screen, render, act } from '@testing-library/react'
import App from './App'

describe('MovieDetails', () => {
  it('should render MovieDetails when clicking on one movie', () => {
    render(<App />)
    const movie = screen.getByText('PULP FICTION')
    act(() => {
      movie.click()
    })
    const rating = screen.getByText(8.9)
    expect(rating).toBeInTheDocument()
  })
})

describe('SearchForm', () => {
  it('component renders searchForm with correct placeHolder', () => {
    render(<App />)
    const searchFormPlaceHolder = screen.getByPlaceholderText('What do you want to watch?')
    expect(searchFormPlaceHolder).toBeInTheDocument()
  })
  it('after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    render(<App />)
    const searchFormInput = screen.getByTitle('search-form-value')
    fireEvent.change(searchFormInput, {
      target: { value: '23' }
    })
    expect(searchFormInput.value).toEqual('23')
  })
  it('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    render(<App />)
    const searchFormInput = screen.getByTitle('search-form-value')
    fireEvent.change(searchFormInput, {
      target: { value: '44' }
    })
    fireEvent.keyDown(searchFormInput, { keyCode: 13 })
    expect(searchFormInput.value).toEqual('44')
  })
})
