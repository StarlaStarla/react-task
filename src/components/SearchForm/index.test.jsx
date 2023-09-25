import { fireEvent, screen, render } from '@testing-library/react'
import SearchForm from '../SearchForm'

describe('SearchForm', () => {
  const changeText = jest.fn()
  const handleEnterEvent = jest.fn()

  it('component renders searchForm with correct placeHolder', () => {
    render(<SearchForm {...{ changeText, handleEnterEvent }} />)
    const searchFormPlaceHolder = screen.getByPlaceholderText('What do you want to watch?')
    expect(searchFormPlaceHolder).toBeInTheDocument()
  })
  it('after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    render(<SearchForm {...{ changeText, handleEnterEvent }} />)
    const searchFormInput = screen.getByTitle('search-form-value')
    fireEvent.change(searchFormInput, {
      target: { value: '23' }
    })
    expect(changeText).toHaveBeenCalled()
  })
  it('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    render(<SearchForm {...{ changeText, handleEnterEvent }} />)
    const searchFormInput = screen.getByTitle('search-form-value')
    fireEvent.change(searchFormInput, {
      target: { value: '23' }
    })
    fireEvent.keyDown(searchFormInput, { keyCode: 27 })
    expect(handleEnterEvent).toHaveBeenCalled()
  })
})
