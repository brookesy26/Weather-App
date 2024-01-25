import Input from './input'
import { useState } from 'react'

const SearchBar = ({ setInputValue, setEnterState }) => {
  const [currentValue, setCurrentValue] = useState('')

  function handleOnChange(e) {
    setCurrentValue(e.target.value)
  }

  function handleKeyPress(key) {
    if (key.key === 'Enter') {
      setInputValue(currentValue)
      setEnterState(true)
    }
  }

  return (
    <Input
      type={'search'}
      placeholder={'Enter City Name'}
      alt={'search'}
      onKeyDown={handleKeyPress}
      onChange={handleOnChange}
    />
  )
}

export default SearchBar