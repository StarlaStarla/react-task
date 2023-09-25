import SearchForm from '../components/SearchForm'

export default {
  title: 'Component/SearchForm',
  component: SearchForm,
  argTypes: { changeText: { action: ' onChange' }, handleEnterEvent: { action: ' onKeyDown' } }
}

export const SearchFormExample = {}
