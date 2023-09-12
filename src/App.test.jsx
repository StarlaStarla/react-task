import { fireEvent, screen, render } from '@testing-library/react'
import App from './App'

describe('Counter', () => {
  it('component renders initial value provided in props', () => {
    render(<App />)
    const counterInput = screen.getByDisplayValue('0')
    expect(counterInput).toBeInTheDocument()
  })

  it('a click event on "decrement" button decrements the displayed value', () => {
    render(<App />)
    const counterInput = screen.getByTitle('counter-value')
    const decreaseButton = screen.getByDisplayValue('decrease')
    fireEvent.click(decreaseButton)
    expect(counterInput.value).toEqual('-1')
  })

  it('a click event on "increment" button increments the displayed value', () => {
    render(<App />)
    const counterInput = screen.getByTitle('counter-value')
    const increaseButton = screen.getByDisplayValue('increase')
    fireEvent.click(increaseButton)
    expect(counterInput.value).toEqual('1')
  })
})

describe('SearchForm', () => {
  it('component renders an input with the value equal to initial value passed in props', () => {
    render(<App />)
    const searchFormInput = screen.getByTitle('search-form-value')
    expect(searchFormInput).toBeInTheDocument()
  })
  it('after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    render(<App />)
    const searchFormInput = screen.getByTitle('search-form-value')
    searchFormInput.onchange = jest.fn()
    fireEvent.change(searchFormInput, {
      target: { value: '23' }
    })
    expect(searchFormInput.onchange).toHaveBeenCalled()
  })
  it('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    render(<App />)
    const searchFormInput = screen.getByTitle('search-form-value')
    searchFormInput.onchange = jest.fn()
    fireEvent.change(searchFormInput, {
      target: { value: '23' }
    })
    fireEvent.keyDown(searchFormInput, { keyCode: 27 })
    expect(searchFormInput.onchange).toHaveBeenCalled()
  })
})

describe('GenreSelect', () => {
  it('component renders all genres passed in props', () => {
    render(<App />)
    const option = screen.getByDisplayValue('Crime')
    expect(option).toBeInTheDocument()
  })
  it('component highlights a selected genre passed in props', () => {
    render(<App />)
    const select = screen.getByTestId('select')
    fireEvent.change(select, { target: { value: 'Comedy' } })
    const selectedOption = screen.getByText('Comedy')
    expect(selectedOption.className).toContain('selected')
  })
  it('after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    render(<App />)
    const select = screen.getByTestId('select')
    select.onchange = jest.fn().mockImplementation((e) => expect(e.target.value).toEqual('Horror'))
    fireEvent.change(select, { target: { value: 'Horror' } })
  })
})
